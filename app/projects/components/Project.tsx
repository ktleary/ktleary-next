import {ProjectDetails} from '../project-data';
import {LabelIos, LabelWeb, LabelOpenFin, LabelOpenSource} from '../labels';
import AppIcons from '../app-icons/AppIcons';

const Project = (projectDetails: ProjectDetails) => {
  const {name, description, ios, web, openfin, opensource} = projectDetails;

  return (
    <div
      className="rounded-xl border-slate-300 dark:border-slate-700
     border  flex flex-col justify-center items-center p-4 m-4 w-64 h-64">
      <div className="flex flex-col justify-center items-center rounded-xl border border-gray-800 bg-gray-900  m-4">
        {AppIcons[name]}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center text-2xl font-bold">{name}</div>
        <div className="text-center text-lg font-normal">{description}</div>
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

export default Project;
