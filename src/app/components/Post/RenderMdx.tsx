import { useMDXComponent } from "next-contentlayer/hooks";
import {Post} from "@/.contentlayer/generated";

type RenderMdxProps = {
    post: Post
} 

export default function RenderMdx({post}: RenderMdxProps) {
    const mdxContent = useMDXComponent(post.body.code)
}
