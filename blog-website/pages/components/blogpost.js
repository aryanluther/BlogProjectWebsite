import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";

export default function blogpost({ posts }) {
  console.log(posts);
  return (
    <div>
      <div className="text-center">
        <h1 className="font-mono italic text-5xl text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-red-500">
          Let&apos;s get started
        </h1>
      </div>
      <div></div>
    </div>
  );
}

export async function getStaticProps() {
  const { data: posts } = await client.query({
    query: gql`
      query {
        posts {
          title
          slug
          field
          dt
          coverPhoto {
            url
          }
          richtext {
            html
          }
          photo2 {
            url
          }
          description
        }
      }
    `,
  });

  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
