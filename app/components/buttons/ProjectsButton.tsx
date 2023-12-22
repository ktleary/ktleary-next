import Link from 'next/link';
import ProjectsIcon from './ProjectsIcon';

const ProjectsButton = () => (
  <div className="flex justify-center">
    <Link href="projects">
      <button
        className="bg-blue-700 hover:bg-blue-600 w-32 text-white font-bold   border-0 outline-none focus:outline-none rounded-full text-lg flex justify-center items-center py-2"
        data-testid="enter-button">
        <ProjectsIcon className="inline-block w-6 h-6 mr-2" />
        Projects
      </button>
    </Link>
  </div>
);

export default ProjectsButton;
