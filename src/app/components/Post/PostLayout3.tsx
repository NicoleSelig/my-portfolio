import React from "react";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

type PostLayout3Props = {
  post: Post;
};

export default function PostLayout3({ post }: PostLayout3Props) {
  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link
        href={post.url}
        className="h-full rounded-xl overflow-hidden"
      >
        <Image
          src={post.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={post.image.blurhashDataUrl}
          alt={post.title}
          width={post.image.width}
          height={post.image.height}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all
          ease duration-300" 
        />
      </Link>
      <div className="flex flex-col w-full mt-4">
        {post.tags && post.tags.length > 0 && (
          <span className="uppercase text-accent font-semibold text-sm">
            {post.tags[0]}
          </span>
        )}

        <Link href={post.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 
              bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom
              bg-no-repeat transition[background-size] duration-500"
            >
              {post.title}
            </span>
          </h2>
        </Link>
        <span className="capitalize text-dark/50 dark:text-light/50 font-semibold text-base">{format(new Date(post.date), "MMMM dd, yyyy")}</span>
      </div>
    </div>
  );
}
