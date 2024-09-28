const SkillList = [
  "Typescript",
  "Javascript",
  "Next.js",
  "NestJs",
  "Three Js",
  "React Three Fiber",
  "Python",
  "Azure Cloud",
  "Azure Pipelines",
  "GitHub Actions",
  "Terraform",
  "Docker",
];

export default function Skills() {
  return (
    <section className="w-full flex flex-col p-20 border-b-2 border-solid border-dark text-dark">
      <span className="font-semibold text-4xl text-accent">
        I'm comfortable in..
      </span>
      <ul className="flex flex-wrap mt-8 justify-start">
        {SkillList.map((item: string, key: number) => {
          return (
            <li key={key} className="font-semibold inline-block capitalize text-2xl py-5 px-12 border-2 border-solid border-dark rounded mr-6 mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer">
              {item}
            </li>
          );
        })
        }
      </ul>
    </section>
  );
}
