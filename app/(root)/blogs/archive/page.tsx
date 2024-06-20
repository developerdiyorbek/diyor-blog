import { getArchiveBlogs, getBlogs } from "@/service/blog.service";
import { format } from "date-fns";
import { Archive, Dot, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const ArchivePage = async () => {
  const blogs = await getArchiveBlogs();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[35vh] flex items-center justify-end flex-col">
        <p className="text-lg text-muted-foreground">Showing posts from</p>
        <h2 className="text-center text-4xl section-title font-creteRound">
          <span>Archive</span>
        </h2>

        <div className="flex gap-1 items-center mt-4">
          <Home className="w-4 h-4" />
          <Link
            href={"/"}
            className="opacity-90 hover:underline hover:opacity-100"
          >
            Home
          </Link>
          <Dot />
          <Link
            href={"/blogs"}
            className="opacity-90 hover:underline hover:opacity-100"
          >
            Blogs
          </Link>
          <Dot />
          <p className="text-muted-foreground">About</p>
        </div>
      </div>

      {blogs.map((blog) => (
        <>
          <div className="flex flex-col space-y-3 mt-8">
            <div className="relative">
              <span className="text-5xl font-creteRound relative z-20">
                {blog.year}
              </span>
              <Archive className="absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 mt-8">
            {blog.blogs.map((blog) => (
              <div
                className="flex gap-2 text-lg text-muted-foreground"
                key={blog.slug}
              >
                <p>{format(new Date(blog.createdAt), "dd MMM")}</p>
                <Dot className="text-white h-8 w-8" />
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="hover:text-white hover:underline cursor-pointer"
                >
                  {blog.title}
                </Link>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default ArchivePage;
