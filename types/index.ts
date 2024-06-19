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
}

export interface IAuthor {
  image: { url: string };
  name: string;
  bio: string;
}
