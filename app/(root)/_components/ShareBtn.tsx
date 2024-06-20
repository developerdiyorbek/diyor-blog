"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Link2, Linkedin, Send, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

const ShareBtn = () => {
  const pathname = usePathname();
  const onCopy = () => {
    const link = "http://localhost:3000/" + pathname;
    navigator.clipboard
      .writeText(link)
      .then(() => toast.success("Copied to clipboard"));
  };

  return (
    <div className="flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4">
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <Twitter />
      </Button>
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <Facebook />
      </Button>
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <Linkedin />
      </Button>
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <Send />
      </Button>
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <Link2 />
      </Button>
    </div>
  );
};

export default ShareBtn;