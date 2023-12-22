import Link from 'next/link';
import Project from './components/Project';
import {projectData} from './project-data';

const GenericLinkIcon = ({className}: {className?: string}) => (
  <svg
    data-testid="button-genericlink"
    viewBox="0 0 24 24"
    className={className}>
    <path d="M0 0h24v24H0z" fill="currentColor" />
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
  </svg>
);

const Projects = () => (
  <div>
    <div className="text-center text-2xl font-medium p-4 pt-8">
      Projects built with ❤️
    </div>
    <div className="flex flex-row justify-center items-center flex-wrap">
      {projectData.map(project => (
        <Link href={`/projects/${project.shortname}`} key={project.name}>
          <Project {...project} key={project.name} />
        </Link>
      ))}
    </div>
  </div>
);

export default Projects;
