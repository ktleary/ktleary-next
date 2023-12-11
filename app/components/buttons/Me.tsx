import Image from 'next/image';
import me from '../../assets/kevin-vietnam-hanging-plant.jpg';

const Me = () => (
  <div className="flex justify-center mt-4">
    <div className="rounded-full overflow-hidden  h-40 w-40 mb-6">
      <Image
        src={me}
        alt="Picture of the author"
        sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 33vw"
      />
    </div>
  </div>
);

export default Me;
