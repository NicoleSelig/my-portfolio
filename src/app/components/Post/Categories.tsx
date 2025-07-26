import { slug } from "github-slugger";
import Category from "./Category";

type CategoriesParams = {
  categories: string[];
  currentSlug: string;
};

export default function Categories({
  categories,
  currentSlug,
}: CategoriesParams) {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 mt-6 md:mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-2 sm:mx-4 md:mx-8 lg:mx-10 overflow-x-auto">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
}
