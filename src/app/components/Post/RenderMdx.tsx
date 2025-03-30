import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Post } from "@/.contentlayer/generated";

type RenderMdxProps = {
  post: Post;
};

const mdxComponents = {
  // TODO: explicitly type
  Image: (props: any) => <Image {...props} />,
};

export default function RenderMdx({ post }: RenderMdxProps) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div
      className="col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
        prose-blockquote:bg-surface/20 
        prose-blockquote:p-2
        prose-blockquote:px-6
        prose-blockquote:border-accent
        prose-blockquote:not-italic
        prose-blockquote:rounded-r-lg
    
        prose-li:marker:text-accent
    
        dark:prose-invert
        dark:prose-blockquote:border-accentDark
        dark:prose-blockquote:bg-surface/20
        dark:prose-li:marker:text-accentDark
    
        first-letter:text-3xl
        sm:first-letter:text-5xl
        "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
}
