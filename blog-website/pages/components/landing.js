import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import logo from "../assets/img.jpeg";
function landing() {
  return (
    <div className="md:flex landing">
      <div className="text-transparent">
        <div className="font-mono text-left md:pl-32 md:pt-60 pt-48 pl-10 ">
          <h1 className="md:text-5xl text-left text-4xl font-medium bg-clip-text bg-gradient-to-r from-purple-800 to-red-700">
            Hello Enthusiastic <br />
            <span className="md:text-4xl text-3xl md:flex-shrink font-medium">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: [
                    "Developer",
                    "Computer Science",
                    "Software Engineer",
                    "and Learner",
                  ],
                }}
              />
            </span>
          </h1>
          <div className="max-w-md mx-auto overflow-hidden md:max-w-lg pt-3">
            <p1 className="font-mono text-lg break-normal bg-clip-text bg-gradient-to-t from-blue-900 to-green-600">
              As an indie developer, I&apos;ve been spending hours and hours at
              my desk every day. So, here is a living snapshot and a place to
              point curious developers to look in my projects
            </p1>
          </div>
        </div>
      </div>
      <div className="object-right pl-32 py-16 invisible md:visible">
        <Image
          className="rounded-2xl"
          src={logo}
          alt="prop"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
}

export default landing;
