import { allPosts } from "@/.contentlayer/generated"
import GitHubSlugger, { slug } from 'github-slugger'
import Categories from '../../components/Post/Categories'
import PostLayout3 from "../../components/Post/PostLayout3"

type CategoriesParams = {
    params: {
        slug: string;
    } 
}

const slugger = new GitHubSlugger()

export async function generateStaticParams() {
    const categories: string[] = [];
    const paths = [{slug: "all"}]

    allPosts.map((post) => {
        if(post.isPublished) {
            post.tags?.map((tag) => {
                const slugified = slugger.slug(tag)
                if(!categories.includes(slugified)) {
                    categories.push(slugified)
                    paths.push({slug: slugified})
                }
            })
        }
    })
    return paths
}


export default function CategoryPage({params}: CategoriesParams) {
    const allCategories = ["all"]

    const posts = allPosts.filter((post) => {
        return post.tags?.some((tag) => {
            const slugified = slug(tag)
            if(!allCategories.includes(slugified)) {
                allCategories.push(slugified)
            }
            if(params.slug === "all") {
                return true
            }
            return slugified === params.slug
        })

    })

    return(
        <article>
            <div>
                <h1>
                    #{params.slug}
                </h1>
                <span>Discover more categories and expand your knowledge!</span>
            </div>
            <Categories categories={allCategories} currentSlug={params.slug} />

            <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
                {
                    posts.map((post, index) => (
                        <article key={index} className="col-span-1 row-span-1 relative">
                            <PostLayout3 post={post}/>
                        </article>
                    ))
                }
            </div>
        </article>
    )
}