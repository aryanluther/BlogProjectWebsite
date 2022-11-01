import React from "react";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function postPage({ blogPostDev }) {
  return (
    <div className="font-mono flex ">
      <div className="content-center">
        <Navbar />
        <h1 className=" py-4 text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-red-600">
          {blogPostDev.title}
        </h1>
        <div className="text-center">
          <Image
            src={blogPostDev.coverImage.url}
            alt={`${blogPostDev.title} coverImage`}
            width={500}
            height={300}
          />
        </div>
        <div className=" py-4 text-center">
          <div
            dangerouslySetInnerHTML={{ __html: blogPostDev.description.html }}
          ></div>
        </div>
      </div>
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
