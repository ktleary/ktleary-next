import Image from 'next/image';
import duck from '../assets/icons8-duck-60.png';

const Twit2NitIcon = () => (
  <div className="flex flex-col justify-center items-center rounded-md bg-white h-16 w-16 overflow-hidden transition duration-500 ease-in-out hover:animate-spin transition-transform from-blue-700 to-blue-300 bg-gradient-to-tr">
    <Image src={duck} alt="duck" width={60} height={60} />
  </div>
);

export default Twit2NitIcon;
