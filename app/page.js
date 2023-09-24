import Image from 'next/image'

import Landing from './components/Landing'
import Marquee from './components/Marquee'

export default function Home() {
  return (
    <main className="">
      <Landing style={{ marginBottom: "0" }} />
      <Marquee style={{ marginTop: "0" }} />
    </main>
  );
}
