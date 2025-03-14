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
    <div className="px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-10">
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
