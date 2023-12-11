import letteru from '../assets/letter-u.png';
import Image from 'next/image';

// const AppIconWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 0.5rem;
//   background: rgb(255, 69, 0);
//   height: 72px;
//   width: 72px;
//   min-height: 72px;
//   min-width: 72px;
// `;

// convert the styled component to tailwindcss

const Red4UIcon = () => (
  <div className="flex flex-col justify-center items-center rounded-md bg-red-500 h-16 w-16">
    <Image src={letteru} alt="duck" width={40} height={40} />
  </div>
);

export default Red4UIcon;
