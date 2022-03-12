import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GreenButton from '../components/general_components/GreenButton'
import StepCard from '../components/general_components/StepCard'

import { steps } from '../utils/steps'
import { companies } from '../utils/companies'
import bluebubble from "../assets/images/hero/blue_bubble.png"
import pc from "../assets/images/upcoming_hangouts/hero.png"
import heart from "../assets/images/upcoming_hangouts/circled_heart.png"
import hangouts_bubble from "../assets/images/upcoming_hangouts/bubble.png"


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
        <section id='trusted_companies' className='relative px-24 mt-10 max-w-7xl mx-auto'>
          <div className='w-full flex gap-12 flex-col md:flex-row items-center justify-between px-20 py-6 border-t border-Grey/10'>
            <h1 className='text-DarkBlue text-xl font-semibold whitespace-nowrap'>Backed By</h1>
            <div className='w-full flex items-center justify-between'>
              {companies.map((company)=>(
                <Image key={company.id} src={company.imageUrl} width={70} height={20} className='object-contain'/>
              ))}
            </div>
          </div>
        </section>
        <section id='hangouts_section' className='relative bg-Grey/5 px-24'>
          <div className='absolute top-20 right-40 z-0'>
            <Image src={hangouts_bubble} height={543} width={700} />
          </div>
          <div className='max-w-7xl mx-auto'>
            <div className='py-24 px-2 flex items-start justify-between'>
              <Image src={pc} height={280} width={420} alt='computer' className='object-cover' />
              <div className='pr-40 pt-12'>
                <h2 className='text-2xl font-bold text-DarkBlue'>The magic formula of <br/> Buddytree is</h2>
                <div className='relative flex items-center mt-10 gap-8'>
                  <div className='absolute -left-16 -bottom-2.5'>
                    <Image src={heart} height={45} width={45} alt="blue heart"/>
                  </div>
                  <p className='text-DarkBlue font-semibold text-sm w-64'>keeping group sizes small, so you don't feel shy to speak.</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-DarkBlue'>Upcoming Hangouts</h1>
              <div className='mt-12 flex '>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
