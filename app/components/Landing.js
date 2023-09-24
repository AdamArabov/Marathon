import Image from 'next/image';
import Marathon from "../assets/marathonlogo.png"
import Timer from './Timer';
import Button from './Button';



  export default function Landing() {     
  
    return (
      <div className="min-h-screen relative ">
        <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover object-center"
          width={1080}
          height={513}
        >
          <source src= "/marathon.mp4"  type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
      </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
        <div className="absolute top-4 right-4">
          
        </div>
  
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-helvetica-neue">
  <h1 className="text-2xl">
  
     <Image
          src={Marathon}
          alt="Your Image Alt Text"
          className="w-full h-full object-cover object-center"
          width={1080}
          height={513}
        />
  </h1>
  <Timer className="text-2xl mt-2"/>
</div>
  
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
         
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button/>
         
        </div>
      </div>
    );
  }