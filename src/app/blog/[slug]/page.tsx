import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Tag from "../../components/Elements/Tag";
import Image from "next/image";
import PostDetails from "../../components/Post/PostDetails";
import RenderMdx from "../../components/Post/RenderMdx";
import { slug } from 'github-slugger';
import { HeadingData } from "@/contentlayer.config";
import { siteMetaData } from "../../utils/siteMetaData";
import { Metadata } from "next";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata | undefined {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return;

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.updated || post.date).toISOString()

  const imageList = []
  // const imageList = [siteMetaData.socialBanner]
  if(post.image) {
    typeof post.image.filePath === 'string' ?
    imageList.push(siteMetaData.siteUrl + post.image.filePath.replace('../../../../public', '')) : post.image
  }

  const ogImages = imageList.map((img) => {
    return { url: img.includes('http') ? img: siteMetaData.siteUrl + img}
  })

  const authors = post.author ? [post.author] : [siteMetaData.author]

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: siteMetaData.siteUrl + post.url,
      siteName: siteMetaData.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors: [siteMetaData.author]
    }
  };
};

export function PostLayout({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {post.tags && post.tags.length > 0 && (
            <Tag
              name={post.tags[0]}
              link={`/categories/${slug(post.tags[0])}`}
              props={{ className: "px-6 text-sm py-2" }}
            />
          )}
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            {post.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
        <Image
          src={post.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={post.image.blurhashDataUrl}
          alt={post.title}
          width={post.image.width}
          height={post.image.height}
          className="aspect-square w-full h-full object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      <PostDetails slug={params.slug} post={post} />
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
            <div className="col-span-4">
              <details className='border-[1px] border-dark border-solid text-dark dark:text-light rounded-lg p-4 sticky top-6
              max-h-[80vh] over-hidden overflow-y-auto'>
                <summary className="text-lg font-semibold capitalize cursor-pointer">Table of Contents</summary>
                <ul className="mt-4 font-in text-base">
                  {
                    post.headings.map((heading: HeadingData) => {
                      return <li key={`#${heading.slug}`} className="py-1">
                        <a href={`#${heading.slug}`} 
                          data-level={heading.level}
                          className="data-[level=two]:pl-0 data[level=two]:pt-2
                          data-[level=two]:border-t border-solid border-dark/40 dark:border-light/40
                          data-[level=three]:pl-6
                          flex items-center justify-start"
                        > 
                        {heading.level === 'three' ?
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">&nbsp;</span>  
                          : null}
                          <span>{heading.text}</span>
                        </a>
                      </li>
                    })
                  }
                </ul>
              </details>
            </div>
            <div className="col-span-8">
              <RenderMdx post={post} />
            </div>
      </div>
    </article>
  );
};

export default PostLayout;
