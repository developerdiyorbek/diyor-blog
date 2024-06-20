export interface ChildProps {
  children: React.ReactNode;
}

export interface IBlog {
  title: string;
  description: string;
  author: IAuthor;
  category: ICategoryAndTags;
  tag: ICategoryAndTags;
  image: { url: string };
  createdAt: string;
  content: { html: string };
  slug: string;
}

export interface ICategoryAndTags {
  name: string;
  slug: string;
  blogs: IBlog[];
}

export interface IAuthor {
  id: string;
  image: { url: string };
  name: string;
  bio: string;
  blogs: IBlog[];
}

export interface IArchivedBlog {
  year: string;
  blogs: IBlog[];
}
