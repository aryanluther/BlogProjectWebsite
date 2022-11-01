import NavBar from "./components/navbar";
import Landing from "./components/landing";
import Blogpost from "./components/blogpost";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import Link from "next/link";
import Image from "next/image";

export default function Home({ blogPostDevs }) {
  console.log(blogPostDevs);
  return (
    <div className="bg-orange-50">
      <NavBar />
      <Landing />
      <Blogpost />
      <div className="flex justify-center py-7">
        <ul className="grid grid-cols-2 gap-24 place-content-center">
          {blogPostDevs.map((blogPostDev, i) => (
            <li key={i}>
              <Link href={`blogPostDevs/${blogPostDev.slug}`}>
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                  <Image
                    className="rounded-lg w-96 h-72"
                    src={blogPostDev.coverImage.url}
                    alt="image description"
                    width={700}
                    height={500}
                  />
                  <p className="absolute bottom-6 px-4 text-lg text-white">
                    {blogPostDev.title}
                  </p>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
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
