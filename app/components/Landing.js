import Image from 'next/image';
import marathon from "../assets/marathon.jpg"
import Timer from './Timer';


  export default function Landing() {     
  
    return (
      <div className="relative min-h-screen ">
        <div className="absolute inset-0 z-0">
        <Image
          src={marathon}
          alt="Your Image Alt Text"
          className="w-full h-full object-cover object-center"
          width={1080}
          height={513}
        />
      </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
        <div className="absolute top-4 right-4">
          
        </div>
  
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-helvetica-neue">
  <h1 className="text-2xl">
  
    <span className="block text-6xl font-extrabold leading-tight">COMING</span>
  </h1>
  <Timer className="text-2xl mt-2"/>
</div>
  
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
         
        </div>
      </div>
    );
  }