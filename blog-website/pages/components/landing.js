import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import logo from "../assets/img.jpeg";
function landing() {
  return (
    <div className="md:flex landing">
      <div className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-red-700">
        <h1 className="md:text-5xl md:pl-28 md:py-60 text-left text-4xl font-medium py-48 pl-10">
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
