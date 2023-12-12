interface LabelProps {
  label: string;
}

const LabelWrapper = ({label}: LabelProps) => {
  return (
    <div className="flex flex-row justify-center items-center rounded-full bg-slate-500 dark:bg-gray-600 py-1 px-2 text-white mr-2 text-xs">
      {label}
    </div>
  );
};

const LabelIos = () => {
  return <LabelWrapper label="ios" />;
};

const LabelWeb = () => {
  return <LabelWrapper label="web" />;
};

const LabelOpenFin = () => {
  return <LabelWrapper label="openfin" />;
};

const LabelOpenSource = () => {
  return <LabelWrapper label="open source" />;
};

export {LabelIos, LabelWeb, LabelOpenFin, LabelOpenSource};
