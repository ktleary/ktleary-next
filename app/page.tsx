import React from 'react';

const lines = [
  'I build innovative software',
  'for companies and organizations',
  'changing the world',
];

interface LandingTextProps {
  text: string;
}

const LandingText = ({text}: LandingTextProps) => (
  <div className="text-center text-[5vmin] my-1 text-white text-opacity-87">
    {text}
  </div>
);

// let's create a call to action to enter the site -- it will go under the text
// it has a weird white outline, lets remove it

const ProjectsButton = () => (
  <div className="flex justify-center mt-4">
    <button
      className="bg-cyan-700 hover:bg-cyan-200 w-28 h-12 text-white font-bold   border-0 outline-none focus:outline-none rounded-full text-lg"
      data-testid="enter-button">
      Projects
    </button>
  </div>
);

const CodeButton = () => (
  <div className="flex justify-center mt-4">
    <button
      className="bg-white hover:bg-slate-200 w-28 text-black font-bold   border-0 outline-none focus:outline-none rounded-full text-lg ml-4"
      data-testid="enter-button">
      Code
    </button>
  </div>
);

const ButtonRow = props => (
  <div className="flex justify-center mt-4">{props.children}</div>
);

const Home = () => (
  <>
    <div className="mt-18 text-white text-opacity-87 mt-40 tracking-tighter">
      {lines.map(line => (
        <LandingText key={line} text={line} />
      ))}
      <div
        className="bg-orange-500 h-[2px] mx-auto my-4 w-[40vmin]"
        data-testid="underline"></div>
    </div>
    <ButtonRow>
      <ProjectsButton />
      <CodeButton />
    </ButtonRow>
  </>
);

export default Home;
