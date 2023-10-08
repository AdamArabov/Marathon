'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/Animations'
import Image from 'next/image'

export default function NewsCard({title,content,image,link,index}){
  //This handles the Individual News Card
  //246x138
    return(
        <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 1)}
        className="flex md:flex-row flex-col gap-1 border border-marathon rounded  p-[20px] mx-2 my-2 "
      >
        <Image
          src={image}
          alt="image"
          className="  md:w-[270px] w-full  h-f"
          width={270}
          height={250}
          priority
        />
        <div className="w-full flex justify-between items-center">
          <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
            <h4 className="font-normal lg:text-[42px] text-[26px] text-marathon">
              {title}
            </h4>
            <p className="mt-[16px] font-normal lg:text-[15px] text-[14px] text-marathon2">
            {content}{" "}
            {link ? (
              <a
                href={link}
                className="text-marathon hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out
              </a>
            ) : null}
          </p>
         
          </div>
         
        </div>
      </motion.div>
    )
}