import ProjectCard from '../components/ProjectCard';
import { projectData } from '../project-data';

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
