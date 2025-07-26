import { allPosts } from "@/.contentlayer/generated";
import GitHubSlugger, { slug } from "github-slugger";
import Categories from "../../components/Post/Categories";
import PostLayout3 from "../../components/Post/PostLayout3";
import { Metadata } from "next";

type CategoriesParams = {
  params: {
    slug: string;
  };
};

const slugger = new GitHubSlugger();

export async function generateStaticParams() {
  const categories: string[] = [];
  const paths = [{ slug: "all" }];

  allPosts.map((post) => {
    if (post.isPublished) {
      post.tags?.map((tag) => {
        const slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });
  return paths;
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata | undefined {
  const toTitleCase = (str: string) =>
    str.replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  return {
    title: `${toTitleCase(params.slug.replace("-", " "))} Posts`,
    description: `Explore my thoughts and findings on ${
      params.slug === "all" ? "various topics" : params.slug
    } with my posts and tutorials.`,
  };
}

export default function CategoryPage({ params }: CategoriesParams) {
  const allCategories = ["all"];

  const posts = allPosts.filter((post) => {
    if (!post.isPublished) return;
    return post.tags?.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-4 md:px-16 lg:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-3xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-12 md:mt-16 lg:mt-24 px-4 md:px-16 lg:px-32">
        {posts.map((post, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <PostLayout3 post={post} />
          </article>
        ))}
      </div>
    </article>
  );
}
