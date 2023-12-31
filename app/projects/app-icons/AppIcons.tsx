import React from 'react';
import Twit2NitIcon from './Twit2NitIcon';
import MorIcon from './MorIcon';
import AlerterIcon from './AlerterIcon';
import InvidilinkIcon from './InvidilinkIcon';
import Red4UIcon from './Red4UIcon';
import SeatGeekIcon2019 from './SeatGeekIcon2019';
import UnitedAarpIcon from './UnitedAarpIcon';
import SqueeblesIcon from './Squeebles';
import TailSpinIcon from './TailSpinIcon';

const AppIcons: {[key: string]: React.ReactNode} = {
  twit2nit: <Twit2NitIcon />,
  'Mor Life': <MorIcon />,
  Alerter: <AlerterIcon />,
  'invidi.link': <InvidilinkIcon />,
  red4u: <Red4UIcon />,
  SeatGeek: <SeatGeekIcon2019 />,
  'United Health': <UnitedAarpIcon />,
  Squeebles: <SqueeblesIcon />,
  Tailspin: <TailSpinIcon />,
};

export default AppIcons;
