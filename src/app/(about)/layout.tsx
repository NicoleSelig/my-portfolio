import { PropsWithChildren } from "react"
// import InsightRoll from "../components/InsightRoll/InsightRoll"

const years = new Date().getFullYear() - new Date(2021, 11, 1).getFullYear();
// const insights: string[] = [
//     "🎓 Butler Computer Science Grad 2020",
//     `${years} Years Experience`,
//     `💻 Software Engineer at SEP`
// ]
export default function AboutLayout({ children }: PropsWithChildren) {
    return <main className="w-full flex flex-col items-center justify-between">
        {/* <div><InsightRoll insights={insights}/></div> */}
        {children}
    </main>
}