import { IBlog } from "@/types";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
  const qeury = gql`
    query MyQuery {
      blogs {
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
        author {
          bio
          name
          image {
            url
          }
        }
        content {
          html
        }
        createdAt
        image {
          url
        }
        slug
        tag {
          slug
          name
        }
      }
    }
  `;

  const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug });
  return blog;
};
