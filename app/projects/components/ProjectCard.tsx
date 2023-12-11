import AppIcons from '../app-icons/AppIcons';
import {BackButton} from '../buttons';
import ViewOnWebButton from '../app-icons/ViewOnWebButton';
import ViewOnGithubButton from '../app-icons/ViewOnGithubButton';
import {ProjectDetails} from '../project-data';
import {Fragment} from 'react';
import Image from 'next/image';

// const Overlay = styled(animated.div)`
//   position: fixed;
//   overflow-y: scroll;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background-color: #212121;
//   z-index: 10;
//   margin-top: 10vh;
//   border-top-left-radius: 20px;
//   border-top-right-radius: 20px;
//   padding-top: 32px;
//   padding-bottom: 32px;
// `;

// const BackWrapper = styled.div`
//   position: absolute;
//   top: 16px;
//   left: 16px;
//   background-color: transparent;
//   width: 32px;
//   height: 32px;
//   align-items: center;
//   justify-content: center;
// `;

// const Card = styled(animated.div)`
//   overflow-y: scroll;
// `;

// const Header = styled.h1`
//   color: rgba(255, 255, 255, 0.87);
//   padding: 0;
//   margin: 0;
//   text-align: center;
//   padding-top: 8px;
//   letter-spacing: -0.45px;
//   font-size: 40px;
//   font-weight: 700;
//   font-family: -apple-system, "OpenSans", "Segoe UI", "Roboto", "Oxygen",
//     "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans,
//     sans-serif;
// `;

// const SubTitle = styled.h2`
//   color: rgba(255, 255, 255, 0.87);
//   padding: 0;
//   margin: 0;
//   margin-bottom: 16px;
//   text-align: center;
//   padding: 16px 8px;
//   letter-spacing: -0.45px;
//   font-size: 24px;
//   font-weight: 500;
//   font-family: -apple-system, "OpenSans", "Segoe UI", "Roboto", "Oxygen";
// `;

// const ProjectIconWrapper = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   width: 100%;
// `;

// const ScreenShotWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin-top: 16px;
//   margin-bottom: 24px;
// `;

// const ScreenShot = styled.img`
//   border-radius: 10px;
//   width: ${({ imageType }) => (imageType === "mobile" ? "20vw" : "60vw")};

//   @media (max-width: 800px) {
//     width: ${({ imageType }) => (imageType === "mobile" ? "50vw" : "80vw")};
//   }
// `;

// const ScreenShotTitle = styled.h3`
//   color: rgba(255, 255, 255, 0.87);
//   padding: 0;
//   margin: 0;
//   text-align: center;
//   padding-top: 8px;
//   letter-spacing: -0.45px;
//   font-size: 20px;
//   font-weight: 500;
//   font-family: -apple-system, "OpenSans", "Segoe UI", "Roboto", "Oxygen";
// `;

// const TopRow = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 600px;
//   margin: auto;
//   font-size: 18px;
//   padding: 0 32px;
//   @media (max-width: 400px) {
//     padding: 0 32px;
//   }
// `;

// const ContentSection = styled.p`
//   color: rgba(255, 255, 255, 0.87);
//   padding: 0;
//   margin: 0;
//   margin-bottom: 8px;
// `;

// const ButtonRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   margin-top: 24px;
//   margin-bottom: 12px;
// `;

// const AboutWrapper = styled.h3`
//   color: rgba(255, 255, 255, 0.87);
//   padding: 0;
//   margin: 0;
//   margin-bottom: 16px;
//   text-align: center;
//   padding-top: 16px;
//   letter-spacing: -0.45px;
//   font-size: 20px;
//   font-weight: 500;
//   font-family: -apple-system, "OpenSans", "Segoe UI", "Roboto", "Oxygen";
// `;

const ProjectCard = ({projectDetails}: {projectDetails: ProjectDetails}) => {
  const {name, description, screenshots, content, siteUrl, repoUrl} =
    projectDetails;

  return (
    <div className="bg-slate-800 text-white rounded-xl border border-gray-700 p-4 m-4 w-full h-full">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-center items-center rounded-xl border border-gray-800 bg-gray-900  m-4">
          {AppIcons[name]}
        </div>
      </div>

      <div className="text-white text-center text-2xl font-bold">{name}</div>
      <div className="text-white text-center text-lg font-normal">
        {description}
      </div>
      <div className="flex flex-row justify-center items-center mt-2 pl-4">
        {siteUrl && <ViewOnWebButton url={siteUrl} fill="white" />}
        {repoUrl && <ViewOnGithubButton url={repoUrl} fill="white" />}
      </div>
      {screenshots.map(screenshot => {
        return (
          <Fragment key={screenshot.title}>
            <div className="text-white text-center text-lg font-normal">
              {screenshot.title}
            </div>
            <div className="flex flex-row justify-center items-center w-full">
              <Image
                src={screenshot.src}
                alt="screenshot"
                width={200}
                // imageType={screenshot.imageType}
              />
            </div>
          </Fragment>
        );
      })}
      {content && (
        <div className="text-white text-center text-lg font-normal">
          <div className="text-white text-center text-lg font-normal">
            About
          </div>
          {content?.split('\n')?.map(paragraph => {
            return (
              <div className="text-white" key={paragraph}>
                {paragraph}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
