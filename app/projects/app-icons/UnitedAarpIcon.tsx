import Image from 'next/image';
import unitedaarp from '../assets/aarpmedicare.png';

// const AppIconWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 0.5rem;
//   background: white;
//   height: 72px;
//   min-height: 72px;
//   width: 72px;
//   min-width: 72px;
// `;

// const IconImage = styled.img`
//   height: 64px;
//   width: 64px;
// `;

const SeatGeekIcon2019 = () => (
  <div className="flex flex-col justify-center items-center rounded-md bg-white h-16 w-16 overflow-hidden">
    <Image src={unitedaarp} alt="united aarp" width={72} height={72} />
  </div>
);

export default SeatGeekIcon2019;
