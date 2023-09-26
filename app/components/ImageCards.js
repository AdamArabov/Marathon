"use client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ImageCard () {
    const [expandedIndex, setExpandedIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false);
    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ?-1 : index)
    }
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); 
      };
  
      
      window.addEventListener('resize', handleResize);
  
      
      handleResize();
  
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    useEffect(() => {
     
      if (isMobile) {
        setExpandedIndex(-1);
      } else {
       
        setExpandedIndex(0);
      }
    }, [isMobile]);

    // const cardVariants = {
    //     expanded: {
    //         width: isMobile? "100%":"3000px"
    //     },
    //     collasped: {
    //         width: "1000px"
    //     }
    // };
    //Going to keep as another design

    const cardVariants = {
      expanded: {
        width: isMobile ? '100%' : '3000px', // Adjust the width for mobile and desktop
        height: isMobile ? '250px' : '500px', // Adjust the height for mobile and desktop
      },
      collapsed: {
        width: isMobile ? '100%' : '250px', // Adjust the width for mobile and desktop
        height: isMobile ? '100px' : '400px', // Adjust the height for mobile and desktop
      },
    };    

    const cardImages = ["/marathon.jpg", "/marathon2.jpg","/marathon3.jpg", "/marathon4.jpg","/marathon5.jpg"]
    const cardDescriptions = [
        'YOU ARE',
        'NOT SAFE',
        'WE ARE',
        'WATCHING',
        'DONT BELIEVE THEM RUNNER'

    ]

   
    

    return(
        <section className="pb-[50px]">
          
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
  {[0, 1,2,3,4].map((index) => (
    <motion.div
      key={index} 
      className={`card cursor-pointer h-[500px] bg-cover bg-center ${index === expandedIndex ? ' expanded' : ''}`}
      variants={cardVariants}
      initial="collapsed" 
      animate={index === expandedIndex ? 'expanded' : 'collapsed'}
      transition={{ duration: 0.5 }}
      onClick={() => handleCardClick(index)}
      style={{
        backgroundImage: `url(${cardImages[index]})`,
        
        
       
      }}
    >
        <div className=" card-content h-full flex flex-col justify-end">
            <div className="card-footer rounded-b-[20px] min-h-[100px] flex flex-col items-center justify-center">
              <h2 className="text-xl text-opacity-0 font-semibold text-white text-center">THEY ARE WATCHING US RUNNER</h2>  
              {index === expandedIndex && (
                <p className="mt-2 text-gray-300 text-center text-opacity-0">{cardDescriptions[index]} </p>
              )
        
              }
            </div>
        </div>
    </motion.div>
    
  ))}

</div>

        </section>
    )
}