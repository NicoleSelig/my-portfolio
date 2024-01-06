import { defineDocumentType, DocumentType, makeSource } from 'contentlayer/source-files'
import { Post as PostData} from 'contentlayer/generated'
import {Pluggable} from 'unified'
import readingTime, {ReadTimeResults} from 'reading-time'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger"

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
    }
  },
  computedFields: {
    readingTime: {
      type: "json",
      resolve: (post: PostData): ReadTimeResults => readingTime(post.body.raw)
    },
    url: { type: 'string', resolve: (post: PostData) => `/blog/${post._raw.flattenedPath}` },
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
