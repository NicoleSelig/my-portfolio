import { Post } from "contentlayer/generated";
import { sortPostsByDate } from "../../utils";
import PostLayout1 from "../Post/PostLayout1";
import PostLayout2 from "../Post/PostLayout2";

type FeaturedPostsProps = {
  posts: Post[];
};

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length === 0) return;
  const sorted = sortPostsByDate(posts);
  return (
    <section className="w-full mt-16 md:mt-24 lg:mt-32 px-4 md:px-16 lg:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-3xl md:text-4xl mb-8 md:mb-16 text-dark dark:text-light">
        Featured Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-2 gap-4 md:gap-6 scroll-mt-16">
        <article className="col-span-1 row-span-2  relative">
          <PostLayout1 post={sorted[2]} />
        </article>
        <article className="col-span-1 row-spawn-1 relative">
          <PostLayout2 post={sorted[3]} />
        </article>
        <article className="col-span-1 row-spawn-1 relative">
          <PostLayout2 post={sorted[4]} />
        </article>
      </div>
    </section>
  );
}
