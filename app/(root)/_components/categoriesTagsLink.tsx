import { Badge } from "@/components/ui/badge";
import { DrawerClose } from "@/components/ui/drawer";
import { ICategoryAndTags } from "@/types";
import Link from "next/link";

interface Props extends ICategoryAndTags {
  type: "categories" | "tags";
}

const CategoriesTagsLink = (item: Props) => {
  return (
    <Link key={item.slug} href={`/${item.type}/${item.slug}`}>
      <DrawerClose>
        <Badge variant={"secondary"}>{item.name}</Badge>
      </DrawerClose>
    </Link>
  );
};

export default CategoriesTagsLink;
