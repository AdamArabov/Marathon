import Image from 'next/image'

import Landing from './components/Landing'
import Marquee from './components/Marquee'

export default function Home() {
  return (
    <main className="flex  flex-col mt-0 mb-0">
      <Landing  />
      <Marquee  />
    </main>
  );
}
