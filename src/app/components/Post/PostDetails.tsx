import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { ReadTimeResults } from "reading-time";

type PostDetailsProps = {
  post: Post;
  slug: string;
};

export default function PostDetails({ slug, post }: PostDetailsProps) {
  const readTime = post.readingTime as ReadTimeResults;
  return (
    <div className="px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className="m-3">{format(parseISO(post.date), "LLLL d, yyyy")}</time>
      <span>10 views</span>
      <div className="m-3">{readTime.text}</div>
      {post.tags && post.tags.length > 0 && (
        <Link href={`categories/${post.tags[0]}`} className="m-3">
          #{post.tags[0]}
        </Link>
      )}
    </div>
  );
}
