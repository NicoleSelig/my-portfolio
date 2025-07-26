import { Post } from "contentlayer/generated";
import { sortPostsByDate } from "../../utils";
import Link from "next/link";
import PostLayout3 from "../Post/PostLayout3";

type RecentPostsProps = {
  posts: Post[];
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  if (posts.length === 0) return;
  const sorted = sortPostsByDate(posts);
  return (
    <section className="w-full mt-16 md:mt-24 lg:mt-32 px-4 md:px-16 lg:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center">
        <h2 className="inline-block font-bold capitalize text-3xl md:text-4xl mb-4 md:mb-0 text-dark dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-16">
        {sorted.slice(0, 6).map((post: Post, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <PostLayout3 post={post} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
