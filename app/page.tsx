import React from 'react';
import CodeButton from './components/buttons/CodeButton';
import Me from './components/buttons/Me';
import ProjectsButton from './components/buttons/ProjectsButton';

/*
results of error when using an anonymous function:
Possible Ways to Fix It

    Move your other exports to a separate file.
    Use a named function for your React component.
    */

function Title() {
  return (
    <div className="text-4xl font-semibold dark:text-white-500">
      Kevin Leary
    </div>
  );
}

function SubTitle() {
  return (
    <div className="mt-4 text-2xl font-medium text-slate-500 dark:text-white">
      Software Developer & Privacy Advocate
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
    <div className="mt-18 text-white text-opacity-87 mt-12 tracking-tighter text-center px-4 h-screen flex flex-col  ">
      <Me />
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
