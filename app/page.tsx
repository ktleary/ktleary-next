import React from 'react';
import me from './assets/kevin-vietnam-hanging-plant.jpg';
import Image from 'next/image';
import Link from 'next/link';
import GitHubButton from './components/buttons/GithubButton';
import ProjectsButton from './components/buttons/ProjectsButton';
import CodeButton from './components/buttons/CodeButton';
import Me from './components/buttons/Me';

const Title = () => (
  <div className="text-4xl font-bold text-blue-300">Kevin Leary</div>
);

const SubTitle = () => (
  <div className="mt-4 text-2xl font-bold text-slate-500 dark:text-white">
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
