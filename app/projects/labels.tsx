interface LabelProps {
  label: string;
}

const LabelWrapper = ({label}: LabelProps) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-full bg-gray-600 h-5 px-2 text-white mr-2 text-xs">
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
