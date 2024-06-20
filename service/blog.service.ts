import { IArchivedBlog, IBlog } from "@/types";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
  const qeury = gql`
    query MyQuery {
      blogs(where: { archive: false }) {
        title
        createdAt
        slug
        content {
          html
        }
        author {
          name
          image {
            url
          }
        }
        slug
        category {
          name
          slug
        }
        description
        tag {
          name
          slug
        }
        image {
          url
        }
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, qeury);

  return blogs;
};

export const getDetailedBlog = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: { slug: $slug }) {
        title
        description
        slug
        createdAt
        author {
          id
          bio
          name
          image {
            url
          }
        }
        content {
          html
        }
        image {
          url
        }
        tag {
          slug
          name
        }
        category {
          slug
          name
        }
      }
    }
  `;

  const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug });
  return blog;
};

export const getSearchBlogs = async (title: string) => {
  const query = gql`
    query MyQuery($title: String!) {
      blogs(where: { title_contains: $title }) {
        title
        slug
        createdAt
        image {
          url
        }
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query, {
    title,
  });

  return blogs;
};

export const getArchiveBlogs = async () => {
  const qeury = gql`
    query MyQuery {
      blogs(where: { archive: true }) {
        title
        createdAt
        slug
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, qeury);

  const filteredBlogs = blogs.reduce(
    (acc: { [year: string]: IArchivedBlog }, blog) => {
      const year = blog.createdAt.substring(0, 4);
      if (!acc[year]) {
        acc[year] = { year, blogs: [] };
      }
      acc[year].blogs.push(blog);

      return acc;
    },
    {}
  );

  const result: IArchivedBlog[] = Object.values(filteredBlogs);

  return result;
};
