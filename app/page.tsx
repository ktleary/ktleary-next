import React from 'react';
import CodeButton from './components/buttons/CodeButton';
import Me from './components/buttons/Me';
import ProjectsButton from './components/buttons/ProjectsButton';

const Title = () => (
  <div className="text-4xl font-semibold text-cyan-600">Kevin Leary</div>
);

const SubTitle = () => (
  <div className="mt-4 text-2xl font-medium text-slate-500 dark:text-white">
    Software Developer
  </div>
);

interface ButtonRowProps {
  children: React.ReactNode;
}

const ButtonRow = (props: ButtonRowProps) => (
  <div
    className="flex justify-center mt-8  flex-row items-center 
  ">
    {props.children}
  </div>
);

const Home = () => (
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

export default Home;
