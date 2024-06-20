import { ICategoryAndTags } from "@/types";
import { Layers2, Tags } from "lucide-react";
import Link from "next/link";

interface Item extends ICategoryAndTags {
  type: "categories" | "tags";
}

const CategoriesTagsCard = (item: Item) => {
  return (
    <Link
      href={`/${item.type}/${item.slug}`}
      className="bg-secondary hover:bg-secondary/80 p-4 md:p-8  rounded-md shadow-xl transition-colors flex flex-col items-center gap-y-2"
    >
      {item.type === "tags" ? <Tags /> : <Layers2 />}
      <h2 className="text-xl font-creteRound">{item.name}</h2>
      <p>{item.blogs.length} posts</p>
    </Link>
  );
};

export default CategoriesTagsCard;
