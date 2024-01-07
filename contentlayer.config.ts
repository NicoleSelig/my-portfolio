import { defineDocumentType, DocumentType, makeSource } from 'contentlayer/source-files'
import { Post as PostData} from 'contentlayer/generated'
import {Pluggable} from 'unified'
import readingTime, {ReadTimeResults} from 'reading-time'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger"
import { parseJSON } from 'date-fns/fp';

export type HeadingData = {
  level: string
  text?: string
  slug?: string
}

export const Post: DocumentType<string> = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    updated: { type: 'date', required: true },
    description: {type: 'string', required: true},
    image: {type: 'image', required: true},
    isPublished: {
      type: 'boolean',
      default: true,
    },
    author: {
      type: 'string',
      default: 'Nicole Selig',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    toc: {
      type: 'boolean',
      required: false,
      default: false
    }
  },
  computedFields: {
    readingTime: {
      type: "json",
      resolve: (post: PostData): ReadTimeResults => readingTime(post.body.raw)
    },
    url: { type: 'string', resolve: (post: PostData) => `/blog/${post._raw.flattenedPath}` },
    headings: {
      type: 'json',
      resolve: async (post: PostData) => {
        const headingsRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger()
        const headings: HeadingData[] = Array.from(post.body.raw.matchAll(headingsRegex)).map(
          ({groups}) => {
            const flag = groups?.flag
            const content = groups?.content
            return {
              level: flag?.length == 1 ? 'one' : flag?.length == 2 ? 'two' : 'three',
              text: content,
              slug: content ? slugger.slug(content) : undefined
            };
          }
        )
        return headings
      }
    }
  },
}))

const codeOptions = {
  theme: 'github-dark',
  grid: false
}

export default makeSource({
  contentDirPath: './blog',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior: 'append'}], [rehypePrettyCode, codeOptions]] as Pluggable[]
  }
})
