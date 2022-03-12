import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GreenButton from '../components/general_components/GreenButton'
import StepCard from '../components/general_components/StepCard'

import { steps } from '../utils/steps'
import bluebubble from "../assets/images/hero/blue_bubble.png"

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>BodyTree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full mx-auto ">
        <section id='hero_section' className='relative bg-Blue py-20 px-24'>
          <div className='absolute -top-20 right-0 z-0'>
            <Image src={bluebubble} height={543} width={700} />
          </div>
          <div className='flex justify-between items-center max-w-7xl mx-auto relative'>
            <div className='basis-1/2'>
              <h1 className='text-2xl font-bold text-white mb-14'>A space to have meaningful <br/> discussions and make long-lasting <br/> friendships.</h1>
              <GreenButton text="GET STARTED FOR FREE"/>
            </div>
          </div>
        </section>
        <section id='how_buddytree_works' className='relative px-24 py-20 max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-3 md:gap-0'>
            <h1 className='text-2xl font-bold text-DarkBlue'>How Buddytree Works</h1>
            <p className='font-semibold text-sm text-Grey'>You’re born into your family, but your Buddytree is yours to create.</p>
          </div>
          <div className='flex flex-col md:flex-row justify-between mt-16'>
            {steps.map((step)=>(
              <StepCard key={step.id} data={step}/>
            ))}
          </div>
          <div className='text-center mt-16'>
            <GreenButton text="GET STARTED FOR FREE"/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
