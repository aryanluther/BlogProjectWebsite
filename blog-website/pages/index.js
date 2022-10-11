import NavBar from "./components/navbar";
import Landing from "./components/landing";
import Blogpost from "./components/blogpost";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import Link from "next/link";

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
        <ul>
          {blogPostDevs.map((blogPostDev, i) => (
            <li key={i}>
              <Link href={`blogPostDevs/${blogPostDev.slug}`}>
                {blogPostDev.title}
              </Link>
            </li>
          ))}
        </ul>
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
