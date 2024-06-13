import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { popularCategories, popularTags } from "@/constants";

import { Search } from "lucide-react";

const GlobalSearch = () => {
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
          />

          <div className="flex flex-col space-y-2 mt-4">
            <p className="font-creteRound text-2xl">See posts by categories</p>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((item) => (
                <Badge key={item.slug} variant={"secondary"}>
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2 mt-4">
            <p className="font-creteRound text-2xl">See posts by tags</p>
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
