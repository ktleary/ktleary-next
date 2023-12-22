import Image from 'next/image';
import tail from '../assets/tailspin/tailspin-logo-1.png';

// const AppIconWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 0.5rem;
//   background: linear-gradient(to top right, #0d47a1, #64b5f6);
//   height: 72px;
//   width: 72px;
//   min-height: 72px;
//   min-width: 72px;
//   transition: transform 0.5s ease-in-out;
//   &:hover {
//     transform: rotate(360deg);
//   }
// `;

// convert the styled component to tailwindcss

// const IconImage = styled.img`
//   height: 64px;
//   width: 64px;
// `;

const TailSpinIcon = () => (
  <div className="flex flex-col justify-center items-center rounded-md bg-white h-16 w-16 overflow-hidden transition duration-500 ease-in-out hover:animate-spin transition-transform from-blue-700 to-blue-300 bg-gradient-to-tr">
    <Image src={tail} alt="duck" />
  </div>
);

export default TailSpinIcon;
