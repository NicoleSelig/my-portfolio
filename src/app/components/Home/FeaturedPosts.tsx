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
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl mb-16">
        Featured Posts
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 scroll-mt-16">
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
