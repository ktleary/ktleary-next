import Image from 'next/image';
import duck from '../assets/icons8-duck-60.png';

// const AppIconWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 0.5rem;
//   background: linear-gradient(to top right, #1da1f2, #ff6c60);

//   height: 72px;
//   width: 72px;
//   min-height: 72px;
//   min-width: 72px;
// `;

// const IconImage = styled.img`
//   height: 64px;
//   width: 64px;
// `;

const Twit2NitIcon = () => (
  <div className="flex flex-col justify-center items-center rounded-md bg-white h-72 w-72 min-h-72 min-w-72 border-0">
    <Image src={duck} alt="duck" />
  </div>
);

export default Twit2NitIcon;
