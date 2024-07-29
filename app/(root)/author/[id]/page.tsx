import BlogCard from "@/components/cards/blog";
import { getDetailedAuthor } from "@/service/author.service";
import Image from "next/image";

const Page = async ({ params }: { params: { id: string } }) => {
  const author = await getDetailedAuthor(params.id);

  return (
    <div className="max-w-6xl mx-auto pt-24">
      <div className="flex mt-6 gap-6 items-center max-md:flex-col">
        <Image
          src={author.image.url}
          width={200}
          height={200}
          alt="author"
          className="rounded-md max-md:self-center"
        />

        <div className="flex flex-col flex-1 space-y-4">
          <p className="text-muted-foreground text-xl">
            <span className="font-bold">{author.blogs.length}</span> Published
            posts
          </p>
          <h2 className="text-3xl font-creteRound">{author.name}</h2>
          <p className="lime-clamp-2 text-muted-foreground max-w-xl">
            {author.bio}
          </p>
        </div>
      </div>

      <h2 className="text-center max-md:mt-12 mt-20 text-4xl section-title font-creteRound">
        <span>Published posts</span>
      </h2>

      <div className="flex flex-col space-y-24 mt-24">
        {author.blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Page;
