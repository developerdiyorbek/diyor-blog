"use client";

import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { popularCategories, popularTags } from "@/constants";
import { getSearchBlogs } from "@/service/blog.service";
import { IBlog } from "@/types";

import { Loader2, Minus, Search } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { debounce } from "lodash";
import SearchCard from "@/components/cards/search";
import { Separator } from "@/components/ui/separator";

const GlobalSearch = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase();
    if (text && text.length > 2) {
      setLoading(true);
      const data = await getSearchBlogs(text);
      setBlogs(data);
      setLoading(false);
    } else {
      setBlogs([]);
      setLoading(false);
    }
  };

  const debaunceSearch = debounce(handleSearch, 500);

  return (
    <Drawer>
      <DrawerTrigger>
        <div className="hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-1">
          <span className="hidden md:block">Search</span>
          <Search className="w-5 h-5" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="container mx-auto max-w-6xl py-12">
          <Input
            className="bg-secondary"
            placeholder="Type to search blog..."
            onChange={debaunceSearch}
            disabled={loading}
          />

          {loading && <Loader2 className="animate-spin mx-auto mt-2" />}
          {blogs.length ? (
            <div className="mt-2"> {blogs.length} result founds</div>
          ) : null}

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2">
            {blogs &&
              blogs.map((blog) => <SearchCard key={blog.slug} {...blog} />)}
          </div>

          {blogs.length ? <Separator className="mt-3" /> : null}
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <p className="font-creteRound text-2xl">
                See posts by categories
              </p>
              <Minus />
              <Link href={"/categories"}>
                <DrawerClose className="text-blue-500 underline hover:opacity-90">
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((item) => (
                <Badge key={item.slug} variant={"secondary"}>
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <p className="font-creteRound text-2xl">See posts by tags</p>
              <Minus />
              <Link
                href={"/tags"}
                className="text-blue-500 underline hover:opacity-90"
              >
                <DrawerClose className="text-blue-500 underline hover:opacity-90">
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((item) => (
                <Badge key={item.slug} variant={"secondary"}>
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default GlobalSearch;
