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
      className="bg-secondary hover:bg-secondary/80 p-4 md:p-8  rounded-md shadow-xl flex gap-4 items-center transition-colors"
    >
      {item.type === "tags" ? <Tags /> : <Layers2 />}
      <h2 className="text-2xl font-creteRound">{item.name}</h2>
    </Link>
  );
};

export default CategoriesTagsCard;
