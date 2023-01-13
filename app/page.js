"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedLetters from "./../components/AnimatedLetters/index";
import { PageWrapper } from "./wrapper";


export default function Page() {
  const [letterClass, setLetterClass] = useState("");

  const nameArray = [..."   Amit Jhariya"];
  const jobArray = [..."Full Stack Developer"];

  useEffect(() => {
    setLetterClass("text-animate");

    return () =>
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
  }, []);

  return (
    <>
    <PageWrapper>
    <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <span className={`${letterClass} _1`}>H</span>
            <span className={`${letterClass} _2`}>i,</span>
            <br />
            <span className={`${letterClass} _3`}>I</span>
            <span className={`${letterClass} _4`}>'m</span>
            <AnimatedLetters
              strArray={nameArray}
              letterClass={letterClass}
              idx={5}
            />
            <br />
            <AnimatedLetters
              strArray={jobArray}
              letterClass={letterClass}
              idx={15}
            />
            <p className="mt-6 text-lg leading-8 text-gray-100 duration-1000">
              Senior Software Engineer with experience in Frontend development
              using React and Next JS, and Backend development using Node.JS,
              Express.JS, PHP, and MySQL.I'm interested in working in a learning
              and challenging environment and has experience in various aspects
              of the software development lifecycle including analyzing,
              designing, developing, testing, debugging, and deploying.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
      
    </>
  );
}
