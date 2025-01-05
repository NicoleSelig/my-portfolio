import { Post } from "contentlayer/generated";
import { sortPostsByDate } from "../../utils";
import Link from "next/link";
import PostLayout3 from "../Post/PostLayout3";

type RecentPostsProps = {
  posts: Post[];
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  if(posts.length === 0) return
  const sorted = sortPostsByDate(posts);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent underline underline-offset-2 text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-3 grid-row-2 gap-16 mt-16">
        {sorted.slice(5, 11).map((post: Post, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              {" "}
              <PostLayout3 post={post} />{" "}
            </article>
          );
        })}
      </div>
    </section>
  );
}
