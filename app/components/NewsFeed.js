'use client'
import newsPosts from '@/app/newsfeed.json'
import { motion } from 'framer-motion'
import { TypingText } from './TextAnimations'
import NewsCard from './NewsCard'
import { staggerContainer } from '@/utils/Animations'


export default function NewsFeed() {
  //This handles the News Feed
return(
  <section className= 'relative z-10'>
  <div className="gradient-02 z-0" />
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className=  'mx-auto  flex-col '
  >
    <TypingText title="Latest News" textStyles="text-center" />
    <div className="mt-[50px] flex flex-col gap-[30px]">
        {newsPosts.map((item, index) => (
          <NewsCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
  </motion.div>
</section>
)
}