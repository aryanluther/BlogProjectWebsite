import NavBar from "./components/navbar";
import Landing from "./components/landing";
import Blogpost from "./components/blogpost";
import { gql } from "@apollo/client";
import client from "../apolloClient";

export default function Home({ blogPostDevs }) {
  console.log(blogPostDevs);
  return (
    <>
      <div className="bg-orange-50">
        <NavBar />
        <Landing />
        <Blogpost />
      </div>
      <div className="">
        <ul></ul>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        blogPostDevs {
          title
          slug
          postDate
          coverImage {
            url
          }
          name
          description {
            raw
          }
        }
      }
    `,
  });
  const { blogPostDevs } = data;
  return {
    props: {
      blogPostDevs,
    },
  };
}
