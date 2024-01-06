import { defineDocumentType, DocumentType, makeSource } from 'contentlayer/source-files'
import { Post as PostData} from 'contentlayer/generated'
import readingTime, {ReadTimeResults} from 'reading-time'

export const Post: DocumentType<string> = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    updated: { type: 'date', required: true },
    description: {type: 'mdx', required: true},
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

export default makeSource({ contentDirPath: './blog', documentTypes: [Post] })
