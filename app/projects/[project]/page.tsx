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
  return <ProjectCard projectDetails={currentProject} />;
};

export default ProjectPage;
