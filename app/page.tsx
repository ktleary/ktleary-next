import React from "react";
import CodeButton from "./components/buttons/CodeButton";
import Me from "./components/buttons/Me";
import ProjectsButton from "./components/buttons/ProjectsButton";

function Title() {
  return (
    <div className="text-4xl font-semibold dark:text-gray-200 text-slate-700 mt-16 text-center">
      Kevin Leary
    </div>
  );
}

function SubTitle() {
  return (
    <div
      className="mt-4 text-lg font-normal text-center 
    text-slate-500 dark:text-gray-400 max-w-lg mx-auto"
    >
      I&apos;m a fullstack developer, pragmatist, and team player. I currently
      work as a Software Engineer and Founder at Broadcove, where I focus on
      delivering high-quality Javascript and LLM-based solutions.
    </div>
  );
}

interface ButtonRowProps {
  children: React.ReactNode;
}

function ButtonRow(props: ButtonRowProps) {
  return (
    <div className="flex justify-center mt-8  flex-row items-center">
      {props.children}
    </div>
  );
}

function Home() {
  return (
    <div className="mt-18 text-white text-opacity-87 mt-24 tracking-tighter px-4 h-screen flex flex-col  ">
      <Title />
      <SubTitle />
      <ButtonRow>
        <ProjectsButton />
        <CodeButton />
      </ButtonRow>
    </div>
  );
}

export default Home;
