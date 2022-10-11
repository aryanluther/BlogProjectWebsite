import React from "react";
import client from "../../apolloClient";
import { gql } from "@apollo/client";

export default function postPage({ blogPostDev }) {
  return (
    <div>
      <h1 className="text-5xl">{blogPostDev.title}</h1>
      <img
        src={blogPostDev.coverImage.url}
        alt={`${blogPostDev.title} coverImage`}
      />
      <div
        dangerouslySetInnerHTML={{ __html: blogPostDev.description.html }}
      ></div>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        blogPostDevs {
          slug
        }
      }
    `,
  });
  const { blogPostDevs } = data;
  const paths = blogPostDevs.map((blogPostDev) => ({
    params: { slug: [blogPostDev.slug] },
  }));
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0];
  const { data } = await client.query({
    query: gql`
      query blogPostSlug($slug: String!) {
        blogPostDevs(where: { slug: $slug }) {
          title
          slug
          postDate
          coverImage {
            url
          }
          name
          description {
            raw
            html
          }
        }
      }
    `,
    variables: { slug },
  });
  const { blogPostDevs } = data;
  const blogPostDev = blogPostDevs[0];
  console.log(blogPostDev);
  return { props: { blogPostDev: blogPostDev } };
}
