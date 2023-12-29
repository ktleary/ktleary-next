import Image from 'next/image';
import {Fragment} from 'react';
import AppIcons from '../app-icons/AppIcons';
import ViewOnGithubButton from '../app-icons/ViewOnGithubButton';
import ViewOnWebButton from '../app-icons/ViewOnWebButton';
import {ProjectDetails} from '../project-data';

const ProjectCard = ({projectDetails}: {projectDetails: ProjectDetails}) => {
  const {name, description, screenshots, content, siteUrl, repoUrl} =
    projectDetails || {};

  if (!projectDetails) {
    return null;
  }

  return (
    <div className="p-4  w-full h-full pt-24">
      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center rounded-xl ring-slate-100 bg-gray-900 m-4">
          <span className="rounded-xl border-slate-100 dark:border-slate-700">
            {AppIcons[name]}
          </span>
        </div>
      </div>

      <div className="text-center text-3xl mt-2 font-medium">{name}</div>
      <div className="text-center text-lg mt-1 font-normal">{description}</div>
      <div className="flex flex-row justify-center items-center mt-2 pl-4">
        {siteUrl && <ViewOnWebButton url={siteUrl} fill="white" />}
        {repoUrl && <ViewOnGithubButton url={repoUrl} fill="white" />}
      </div>
      {screenshots.map((screenshot, i) => (
        <Fragment key={`screenshot-${i}`}>
          <div className="text-white text-center text-lg font-normal mb-3 mt-3">
            {screenshot.title}
          </div>
          <div className="flex flex-row justify-center items-center w-full">
            <Image
              src={screenshot.src}
              alt="screenshot"
              width={screenshot.imageType === 'mobile' ? 200 : 600}
            />
          </div>
        </Fragment>
      ))}
      {content && (
        <div className="text-lg font-normal max-w-xl mx-auto">
          <div className="text-center text-lg  font-bold mt-3 mb-3">About</div>
          {content?.split('\n')?.map((paragraph, i) => (
            <div
              className="text-lg font-normal mb-1 mt-1"
              key={`paragraph-${i}`}>
              {paragraph}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
