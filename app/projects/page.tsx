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

/*
===
- example for how we will link dynamically to the project page
- we have setup a folder called [project] in the projects folder (current folder)
pwd && ls -la
/Users/kleary/Documents/dev/explore/ktleary-next/app/projects
drwxr-xr-x     - kleary 10 Dec 23:43 [project] // <-- this is the dynamic route folder
drwxr-xr-x@    - kleary 10 Dec 16:31 app-icons
drwxr-xr-x     - kleary 10 Dec 14:08 assets
.rw-r--r--@ 4.9k kleary 10 Dec 14:13 buttons.tsx
drwxr-xr-x     - kleary 10 Dec 23:23 components
.rw-r--r--@  613 kleary 10 Dec 15:11 labels.tsx
.rw-r--r--  1.0k kleary 10 Dec 17:40 page.tsx
.rw-r--r--   11k kleary 10 Dec 17:33 project-data.ts
===

export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
*/

const Projects = () => (
  <div className="bg-slate-800">
    <div className="text-white text-center text-4xl font-bold p-4">
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
