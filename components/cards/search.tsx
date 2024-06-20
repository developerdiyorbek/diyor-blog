import { IBlog } from "@/types";
import Link from "next/link";
import { DrawerClose } from "../ui/drawer";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

const SearchCard = (blog: IBlog) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <DrawerClose className="flex flex-col space-y-3 text-start">
        <Image
          width={200}
          height={200}
          src={blog.image.url}
          alt={blog.title}
          className="rounded-md shadow-xl dark:shadow-white/10"
        />
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          <p className="text-sm">
            {format(new Date(blog.createdAt), "MMM dd, yyyy")}
          </p>
        </div>
        <h1 className="font-creteRound">{blog.title}</h1>
      </DrawerClose>
    </Link>
  );
};

export default SearchCard;
