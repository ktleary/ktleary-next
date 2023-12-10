import play from '../assets/icons8-play-50.png';
import Image from 'next/image';

const InvidilinkIcon = () => (
  <div className="flex flex-col justify-center items-center rounded-md bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-72 w-72 min-h-72 min-w-72">
    <Image src={play} alt="play" />
  </div>
);

export default InvidilinkIcon;
