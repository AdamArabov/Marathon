"use client"

import { motion } from "framer-motion";
import { useState } from "react";

export default function ImageCard () {
    const [expandedIndex, setExpandedIndex] = useState(0)
    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ?-1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "3000px"
        },
        collasped: {
            width: "500px"
        }
    }

    const cardImages = ["/marathon.jpg", "/marathon2.jpg","/marathon3.jpg", "/marathon4.jpg"]
    const cardDescriptions = [
        'YOU ARE',
        'NOT SAFE',
        'We ARE',
        'WATCHING',

    ]
    return(
        <section className=" pb-[300px]">
          
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
  {[0, 1,2,3].map((index) => (
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
              <h2 className="text-xl font-semibold text-white text-center">{index * 777}</h2>  
              {index === expandedIndex && (
                <p className="mt-2 text-gray-300 text-center">{cardDescriptions[index]} </p>
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