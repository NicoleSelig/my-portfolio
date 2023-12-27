import { Post } from "contentlayer/generated"
import { compareDesc, parseISO } from "date-fns"

export function addClasses(...classNames: string[]): string {
    return classNames.filter(Boolean).join(" ")
}

export function sortPostsByDate(posts: Post[]) {
    return posts.slice().sort((a,b) => compareDesc(parseISO(a.date), parseISO(b.date)))
}
