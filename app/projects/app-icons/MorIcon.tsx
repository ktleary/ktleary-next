import moricon from '../assets/mor-app-icon.png';
import Image from 'next/image';

// const AppIconWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 0.5rem;
//   background: white;
//   height: 72px;
//   width: 72px;
//   min-height: 72px;
//   min-width: 72px;
//   border: 0;
// `;
// convert the styled component to tailwindcss

// const IconImage = styled.img`
//   width: 72px;
//   height: 72px;
//   border: 0;
//   border-radius: 0.5rem;
// `;

const MorIcon = () => (
  <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden bg-white h-16 w-16">
    <Image src={moricon} alt="moricon" width={72} height={72} />
  </div>
);

export default MorIcon;
