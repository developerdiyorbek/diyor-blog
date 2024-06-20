import { IAuthor } from "@/types";
import Image from "next/image";
import Link from "next/link";

const AuthorCard = (author: IAuthor) => {
  return (
    <Link
      href={`author/${author.id}`}
      className="flex flex-col space-y-2 w-52 text-center"
    >
      <div className="w-full relative h-52">
        <Image
          src={author.image.url}
          fill
          alt={author.name}
          className="object-cover rounded-md grayscale hover:grayscale-0 transition-all"
        />
      </div>
      <h2 className="text-2xl font-creteRound">{author.name}</h2>
      <p className="text-muted-foreground">
        <span className="font-bold text-white">{author.blogs.length}</span>{" "}
        Published posts
      </p>
    </Link>
  );
};

export default AuthorCard;
