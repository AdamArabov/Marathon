import Image from 'next/image'

import Landing from './components/Landing'
import Marquee from './components/Marquee'
import ImageCard from './components/ImageCards';
import News from './components/News';
import NewsFeed from './components/NewsFeed';

export default function Home() {
  return (
    <main className="flex  flex-col mt-0 mb-0">
      <Landing  />
      <Marquee  />
      <ImageCard />
      <NewsFeed/>
      <News/>
    </main>
  );
}
