import React from "react";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

type PostLayout1Props = {
  post: Post;
};

export default function PostLayout1({ post }: PostLayout1Props) {
  return (
    <div className="group inline-block overflow-hidden rounded-xl">
      <Image
        src={post.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={post.image.blurhashDataUrl}
        alt={post.title}
        width={post.image.width}
        height={post.image.height}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all
        ease duration-300"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl" />
      <div className="w-full absolute bottom-0 p-10 z-20">
        {post.tags && post.tags.length > 0 && (
          <Tag link={`/categories/${slug(post.tags[0])}`} name={post.tags[0]} props={{className:"px-6 text-small py-2 !border"}} />
        )}
        <Link href={post.url} className="mt-6">
          <h2 className="font-bold capitalize text-2xl text-light mt-4">
            <span
              className="bg-gradient-to-r from-accent to-accent 
              bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom
              bg-no-repeat transition[background-size] duration-500"
            >
              {post.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
