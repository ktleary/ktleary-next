import play from '../assets/icons8-play-50.png';
import Image from 'next/image';

const InvidilinkIcon = () => (
  <div className="flex flex-col justify-center items-center rounded-md bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-16 w-16">
    <Image src={play} alt="play" width={32} height={32} />
  </div>
);

export default InvidilinkIcon;
