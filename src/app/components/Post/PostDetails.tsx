import{Post} from 'contentlayer/generated'

type PostDetailsProps = {
    post: Post
    slug: string
}

export default function PostDetails({slug, post}: PostDetailsProps) {
    return(<div>Post Details</div>)
}
