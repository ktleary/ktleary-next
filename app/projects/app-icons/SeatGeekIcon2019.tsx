import seatgeek2019 from '../assets/seatgeek2019.png';
import Image from 'next/image';

// const AppIconWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 0.5rem;
//   background: white;
//   height: 68px;
//   width: 68px;
//   min-height: 68px;
//   min-width: 68px;
//   padding: 2px;

// `;

// convert the styled component to tailwindcss

// const IconImage = styled.img`
//   height: 64px;
// `;

const SeatGeekIcon2019 = () => (
  <div className="flex flex-col justify-center items-center rounded-md bg-white h-16 w-16 overflow-hidden p-2">
    <Image src={seatgeek2019} alt="seatgeek" width={72} height={72} />
  </div>
);

export default SeatGeekIcon2019;
