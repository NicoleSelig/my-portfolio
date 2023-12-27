import React from "react";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import Tag from "../Elements/Tag";
import { format } from "date-fns";

type PostLayout2Props = {
  post: Post;
};

export default function PostLayout2({ post }: PostLayout2Props) {
  return (
    <div className="grid grid-cols-12 gap-4 items-center text-dark">
      <Link
        href={post.url}
        className="col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={post.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={post.image.blurhashDataUrl}
          alt={post.title}
          width={post.image.width}
          height={post.image.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </Link>
      <div className="col-span-8 w--full">
        {post.tags && post.tags.length > 0 && (
          <span className="uppercase text-accent font-semibold text-sm">
            {post.tags[0]}
          </span>
        )}

        <Link href={post.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 
              bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom
              bg-no-repeat transition[background-size] duration-500"
            >
              {post.title}
            </span>
          </h2>
        </Link>
        <span className="capitalize text-dark/50 font-semibold text-base">{format(new Date(post.date), "MMMM dd, yyyy")}</span>
      </div>
    </div>
  );
}
