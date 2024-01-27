import { Post } from "contentlayer/generated";
import Image from "next/image";
import { sortPostsByDate } from "@/src/app/utils";
import Link from "next/link";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

export type CoverSectionProps = {
  posts: Post[];
};

export default function CoverSection({ posts }: CoverSectionProps) {
  const sorted = sortPostsByDate(posts);
  const latestPost = sorted[0];
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
      <Image
          src={latestPost.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={latestPost.image.blurhashDataUrl}
          alt={latestPost.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl -z-5" />
        <div className="absolute w-3/4 p-16 flex flex-col items-start justify-center text-light">
          {latestPost.tags && latestPost.tags.length > 0 && (
            <Tag
              link={`/categories/${slug(latestPost.tags[0])}`}
              name={latestPost.tags[0]}
            />
          )}
          <Link href={latestPost.url} className="mt-6">
            <h1 className="font-bold capitalize text-4xl">
              <span className="bg-gradient-to-r from-accent to-accent 
              bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom
              bg-no-repeat transition[background-size] duration-500">
                {latestPost.title}
                </span>
            </h1>
          </Link>

          <p className="inline-block mt-4 text-xl font-in">{latestPost.description}</p>
        </div>
      </article>
    </div>
  );
}
