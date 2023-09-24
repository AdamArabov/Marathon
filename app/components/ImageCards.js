"use client"

import { motion } from "framer-motion";
import { useState } from "react";

export default function ImageCard () {
    const [expandedIndex, setExpandedIndex] = useState(null)
    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ?-1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "600px"
        },
        collasped: {
            width: "300px"
        }
    }

    const cardImages = ["/marathon.jpg", "/marathon2.jpg"]
    const cardDescriptions = [
        'YOU ARE',
        'NOT SAFE'
    ]
    return(
        <section className="py-16 pb-[300px]">
          
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
  {[0, 1].map((index) => (
    <motion.div
      key={index} 
      className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px]${index === expandedIndex ? ' expanded' : ''}`}
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
            <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold text-white text-center">Card {index + 1}</h2>  
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