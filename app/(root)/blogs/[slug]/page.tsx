import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Facebook,
  Link2,
  Linkedin,
  Minus,
  Send,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import { getDetailedBlog } from "@/service/blog.service";
import { getReadingTime } from "@/lib/utils";
import { format } from "date-fns";

const BlogsDetailPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await getDetailedBlog(params.slug);

  return (
    <div className="pt-[15vh] max-w-6xl mx-auto">
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-creteRound">
        {blog.title}
      </h1>

      <div className="flex flex-wrap max-md:justify-center mt-4 gap-4 items-center">
        <div className="flex items-center gap-2">
          <Image
            src={blog.author.image.url}
            width={30}
            height={30}
            alt="author"
            className="object-cover rounded-sm"
          />
          <p>by {blog.author.name}</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <p>{getReadingTime(blog.content.html)} min read</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5" />
          <p>{format(new Date(blog.createdAt), "MMM dd, yyyy")}</p>
        </div>
      </div>

      <Image
        src={blog.image.url}
        width={1120}
        height={595}
        alt="blogsImage"
        className="mt-4 rounded-md"
      />

      <div className="flex md:gap-12 max-md:flex-col-reverse mt-12 relative">
        <div className="flex flex-col space-y-3">
          <div className="sticky top-36">
            <p className="text-lg uppercase text-muted-foreground">Share</p>
            <div className="flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4">
              <Button size={"icon"} variant={"outline"}>
                <Twitter />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Facebook />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Linkedin />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Send />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Link2 />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 prose dark:prose-invert">{blog.description}</div>
      </div>

      <div className="flex mt-6 gap-6 items-center max-md:flex-col">
        <Image
          src={blog.author.image.url}
          width={155}
          height={155}
          alt="author"
          className="rounded-md max-md:self-start"
        />

        <div className="flex flex-col flex-1 space-y-4">
          <h2 className="text-3xl font-creteRound">{blog.author.name}</h2>
          <p className="lime-clamp-2 text-muted-foreground">
            {blog.author.bio}
          </p>
          <Link
            href={"/"}
            className="flex items-center gap-2 hover:text-blue-500 underline transition-colors"
          >
            <span>See all posts by this author</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetailPage;
