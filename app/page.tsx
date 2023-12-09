import React from 'react';
import me from './assets/kevin-vietnam-hanging-plant.jpg';
import Image from 'next/image';

const Title = () => (
  <div className="text-4xl font-bold text-blue-300">Kevin Leary</div>
);

const SubTitle = () => (
  <div className="mt-6 text-2xl font-bold text-slate-500 dark:text-white">
    Software Developer and Open Source Enthusiast
  </div>
);

const GitHubButton = ({className}: {className?: string}) => (
  <svg data-testid="button-github" viewBox="0 0 16 16" className={className}>
    <path
      fill="currentColor"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

const ProjectsIcon = ({className}: {className?: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    className={className}
    fill="white"
    width="24">
    <path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z" />
  </svg>
);

const ProjectsButton = () => (
  <div className="flex justify-center mt-4">
    <button
      className="bg-blue-700 hover:bg-blue-600 w-32 text-white font-bold   border-0 outline-none focus:outline-none rounded-full text-lg ml-4 flex justify-center items-center h-10"
      data-testid="enter-button">
      <ProjectsIcon className="inline-block w-6 h-6 mr-2" />
      Projects
    </button>
  </div>
);

const CodeButton = () => (
  <div className="flex justify-center mt-4">
    <button
      className="bg-neutral-700 hover:bg-neutral-600 w-32 text-white font-bold  border-0 outline-none focus:outline-none rounded-full text-lg ml-4 flex justify-center items-center h-10"
      data-testid="enter-button">
      <GitHubButton className="inline-block w-6 h-6 mr-2" />
      Code
    </button>
  </div>
);

const ButtonRow = props => (
  <div className="flex justify-center mt-4 align-middle text-center align-center flex-row items-center h-12">
    {props.children}
  </div>
);

const MeImage = () => (
  <div className="flex justify-center mt-4">
    <div className="rounded-full overflow-hidden  h-40 w-40 mb-4">
      <Image
        src={me}
        alt="Picture of the author"
        layout="responsive"
        width="100"
        height="100"
      />
    </div>
  </div>
);

const Home = () => (
  <>
    <div className="mt-18 text-white text-opacity-87 mt-24 tracking-tighter text-center px-4">
      <MeImage />
      <Title />
      <SubTitle />
    </div>
    <ButtonRow>
      <ProjectsButton />
      <CodeButton />
    </ButtonRow>
  </>
);

export default Home;
