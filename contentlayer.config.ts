import { defineDocumentType, DocumentType, makeSource } from 'contentlayer/source-files'

export type Post = {
  title: { type: 'string', required: true },
  date: { type: 'date', required: true },
}

export const Post: DocumentType<string> = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/**/*.mdx',
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
    url: { type: 'string', resolve: (post: any) => `/blog/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: './blog', documentTypes: [Post] })
