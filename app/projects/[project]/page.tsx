/*
- here is the example of how to get the params from dynamic route

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}
*/
import {projectData} from '../project-data';
import ProjectCard from '../components/ProjectCard';
import {ProjectDetails} from '../project-data';

const ProjectPage = ({params}: {params: {project: string}}) => {
  const currentProject: any = projectData.find(
    project => project.shortname === params.project,
  );
  return (
    <div className="w-full px-2">
      <ProjectCard projectDetails={currentProject} />
    </div>
  );
};

export default ProjectPage;
