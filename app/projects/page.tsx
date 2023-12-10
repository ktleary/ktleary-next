import {projectData} from './project-data';
import AppIcons from './app-icons/AppIcons';
import {ProjectDetails} from './project-data';
import {LabelIos, LabelWeb, LabelOpenFin, LabelOpenSource} from './labels';

// const GenericLinkIcon = styled(GenericLinkButton)`
//   color: transparent;
//   fill: rgba(255, 255, 255, 0.78);
//   height: 20px;
//   width: 20px;
//   &:hover {
//     fill: rgba(255, 255, 255, 1);
//   }
// `;

const GenericLinkIcon = ({className}: {className?: string}) => (
  <svg
    data-testid="button-genericlink"
    viewBox="0 0 24 24"
    className={className}>
    <path d="M0 0h24v24H0z" fill="currentColor" />
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
  </svg>
);

// const SourceHutIcon = styled(SourceHutButton)`
//   color: rgba(255, 255, 255, 0.78);
//   height: 18px;
//   width: 18px;
//   &:hover {
//     color: rgba(255, 255, 255, 1);
//   }
// `;

// const GitHubIcon = styled(GitHubButton)`
//   color: rgba(255, 255, 255, 0.66);
//   height: 18px;
//   width: 18px;
// `;

// const ProjectsContainer = styled.div`
//   background: #212121;
// `;
// const ProjectsSection = styled.h2`
//   color: rgba(255, 255, 255, 0.78);
//   font-size: 24px;
//   font-weight: normal;
//   margin: 0 0 32px 0;
//   padding: 16px 0 0 0;
//   text-align: center;
// `;

// const ProjectDetails = styled.div`
//   display: flex;
//   margin: 8px;
//   flex-wrap: wrap;
//   justify-content: center;
//   @media (max-width: 444px) {
//     justify-content: center;
//   }
//   padding-bottom: 24px;
//   background: #212121;
// `;

// const ProjectTitle = styled.h3`
//   align-items: center;
//   color: rgba(255, 255, 255, 0.87);
//   font-size: 24px;
//   @media (max-width: 444px) {
//     font-size: 20px;
//   }
//   font-weight: 700;
//   display: flex;
//   margin: 0;
//   padding-left: 16px;

//   letter-spacing: -0.3px;
// `;

// const ProjectDescription = styled.div`
//   font-size: 16px;
//   height: 100%;
//   margin: 0 0;
//   padding: 0 16px;
//   line-height: 1.25;
//   letter-spacing: -0.15px;
//   margin-top: 4px;
// `;

// // eslint-disable-next-line no-unused-vars
// const ProjectLinks = styled.div`
//   align-items: center;
//   display: flex;
//   margin: 0;
//   padding: 4px 16px;
// `;

// const LinkContainer = styled.div`
//   cursor: pointer;
//   margin-right: 8px;
//   text-decoration: none;
// `;

// const ProjectIconWrapper = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-right: 8px;
//   width: 128px;
//   min-width: 88px;
//   background: #212121;
// `;

// const ProjectContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 100%;
// `;

// const LabelRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   margin: 0;
//   padding: 8px;
//   align-items: center;
//   margin-top: 4px;
//   padding-left: 16px;
// `;

const Project = (projectDetails: ProjectDetails) => {
  const {name, description, ios, web, openfin, opensource} = projectDetails;

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 flex flex-col justify-center items-center p-4 m-4">
      <div className="flex flex-col justify-center items-center rounded-xl border border-gray-800 bg-gray-900 p-4 m-4">
        {AppIcons[name]}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-center text-2xl font-bold">{name}</div>
        <div className="text-white text-center text-lg font-normal">
          {description}
        </div>
        <div className="flex flex-row justify-start items-center mt-2 pl-4">
          {ios && <LabelIos />}
          {web && <LabelWeb />}
          {openfin && <LabelOpenFin />}
          {opensource && <LabelOpenSource />}
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <div className="bg-gray-900">
    <div className="text-white text-center text-4xl font-bold p-4">
      Apps built with ❤️
    </div>
    <div className="flex flex-row justify-center items-center flex-wrap">
      {projectData.map(project => (
        <Project {...project} key={project.name} />
      ))}
    </div>
  </div>
);

export default Projects;
