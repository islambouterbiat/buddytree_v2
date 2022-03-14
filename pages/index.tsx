import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GreenButton from '../components/general_components/GreenButton'
import StepCard from '../components/general_components/StepCard'
import HangoutCard from '../components/upcoming_hangouts/HangoutCard'
import FeedbackCard from '../components/general_components/FeedbackCard'
import FeedbackSlider from '../components/general_components/FeedbackSlider'

import { steps } from '../utils/steps'
import { companies } from '../utils/companies'
import { hangouts } from '../utils/hangouts'
import { feedbacks } from '../utils/feedbacks'
import hero_1 from "../assets/images/hero/1.png"
import hero_2 from "../assets/images/hero/2.png"
import hero_3 from "../assets/images/hero/3.png"
import hero_4 from "../assets/images/hero/4.png"
import video from "../assets/images/hero/video.png"
import bluebubble from "../assets/images/hero/blue_bubble.png"
import bluebubble_phone from "../assets/images/hero/blue_bubble_phone.png"
import hero_button from "../assets/images/hero/button.png"
import pc from "../assets/images/upcoming_hangouts/hero.png"
import heart from "../assets/images/upcoming_hangouts/circled_heart.png"
import hangouts_bubble from "../assets/images/upcoming_hangouts/bubble.png"
import hangout_logo from "../assets/images/upcoming_hangouts/Quote Mark.png"
import topics_bg from "../assets/images/Mask group.png"
import phone1 from "../assets/images/Phone Mockup 1.png"
import phone2 from "../assets/images/Phone Mockup 2.png"


const Home: NextPage = () => {
  const topics= ["Goals","Motivation","Trust","Vulnerability","Wealth","Sex","Drugs","Movies","Climate","Childfree","Vaccine","Guns","Cancel" ,"culture" ,"Music","Borders & nations","Fear","Confidence","Meaning","Purpose"]
  return (
    <div className="min-h-screen">
      <Head>
        <title>BodyTree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full mx-auto ">
        <section id='hero_section' className='relative bg-Blue pt-10 md:pt-20 pb-20 md:pb-32 px-8 md:px-24 mx-auto'>
          <div className='hidden md:block absolute -top-20 right-0 z-0'>
            <Image src={bluebubble} height={604} width={760} />
          </div>
          <div className='block md:hidden absolute bottom-0 left-0 z-0'>
            <Image src={bluebubble_phone} height={430} width={280} className='object-cover'/>
          </div>
          <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto relative'>
            <div className='order-2 md:order-1 basis-1/2'>
              <h1 className='text-2xl font-bold text-white mb-14'>A space to have meaningful <br/> discussions and make long-lasting <br/> friendships.</h1>
              <GreenButton text="GET STARTED FOR FREE" className="w-full md:w-auto"/>
            </div>
            <div className='text-center relative h-full w-full basis-1/2 order-1 md:order-2 my-16 md:my-auto pb-12 md:pb-0'>
              <div className='absolute -top-16 md:right-28 md:-top-20'>
                <Image src={video} height={250} width={370} alt='intro video thumbnail' className='object-cover'/>
              </div>
              <button className='rounded-full z-20 relative hover:scale-110 transition ease-in-out duration-300'>
                <Image src={hero_button} height={70} width={70} alt='click to play intro video'/>
              </button>
            </div>
          </div>
        </section>
        <section id='how_buddytree_works' className='relative px-8 md:px-24 py-20 max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-3 md:gap-0'>
            <h1 className='text-2xl font-bold text-DarkBlue'>How Buddytree Works</h1>
            <p className='font-semibold text-sm text-Grey'>You’re born into your family, but your Buddytree is yours to create.</p>
          </div>
          <div className='flex flex-col md:flex-row justify-between mt-16 gap-8 md:gap-0'>
            {steps.map((step)=>(
              <StepCard key={step.id} data={step}/>
            ))}
          </div>
          <div className='text-center mt-16'>
            <GreenButton text="GET STARTED FOR FREE" className="w-full md:w-auto"/>
          </div>
        </section>
        <section id='trusted_companies' className='relative px-8 md:px-24 mt-10 max-w-7xl mx-auto'>
          <div className='w-full flex gap-5 md:gap-12 flex-col md:flex-row items-center justify-between md:px-20 py-6 border-t border-Grey/10'>
            <h1 className='text-DarkBlue text-xl font-semibold whitespace-nowrap'>Backed By</h1>
            <div className='w-full flex items-center justify-center md:justify-between flex-wrap gap-y-4'>
              {companies.map((company)=>(
                <div className='basis-1/3 md:basis-20 text-center'>
                  <Image key={company.id} src={company.imageUrl} width={70} height={20} className='object-contain'/>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id='hangouts_section' className='relative bg-Grey/5 px-8 md:px-24'>
          <div className='hidden md:block absolute top-10 right-56 z-0'>
            <Image src={hangouts_bubble} height={800} width={860} />
          </div>
          <div className='max-w-7xl mx-auto'>
            <div className='pt-24 px-2 flex flex-col md:flex-row items-start justify-between'>
              <Image src={pc} height={280} width={420} alt='computer' className='object-cover' />
              <div className='md:pr-40 pt-12'>
                <h2 className='text-2xl font-bold text-DarkBlue'>The magic formula of <br/> Buddytree is</h2>
                <div className='relative flex items-center mt-10 gap-8'>
                  <div className='md:absolute -left-16 -bottom-2.5'>
                    <Image src={heart} height={45} width={45} alt="blue heart"/>
                  </div>
                  <p className='text-DarkBlue font-semibold text-sm w-64'>keeping group sizes small, so you don't feel shy to speak.</p>
                </div>
              </div>
            </div>
            <div className='mt-20'>
              <h1 className='text-2xl font-bold text-DarkBlue'>Upcoming Hangouts</h1>
              <div className='pt-6 md:pt-20 pb-12 w-full flex flex-nowrap gap-8 overflow-x-auto scrolltype'>
                {hangouts.map((hangout)=>(
                  <HangoutCard key={hangout.id} hangout={hangout}/>
                ))}
              </div>
            </div>
            <div id='community' className='pt-32 pb-20 overflow-visible relative'>
              <div className='absolute top-16 left-56'>
                <Image src={hangout_logo} height={190} width={220} className='object-cover'/>
              </div>
              <div className="relative flex flex-col md:flex-row items-start gap-16 md:gap-32 overflow-visible">
                <div className='md:w-72 flex-none h-full'>
                  <h1 className='text-DarkBlue text-2xl font-bold leading-stretch'>Join our community of Buddytree members from around the world.</h1>
                  <GreenButton text="GET STARTED FOR FREE" className="md:absolute bottom-0 w-full md:w-auto mt-10 md:mt-0"/>
                </div>
                <FeedbackSlider feedbacks={feedbacks}/>
              </div>
            </div>
          </div>
        </section>
        <section id='explore_more_section' className='relative px-8 md:px-24 pt-12 pb-20 md:py-32  bg-Blue'>
          <div className='absolute top-0 right-0 z-0'>
            <Image src={topics_bg} height={464} width={680} className='object-cover'/>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className='flex flex-col md:flex-row justify-between items-start gap-20'>
              <div className='basis-1/2 relative'>
                <h1 className='text-2xl font-bold text-white mb-10 md:mb-20'>Humans are social creatures. What discussions would you like to have with others?</h1>
                <GreenButton text='EXPLORE MORE TOPICS' className='w-full md:w-auto'/>
              </div>
              <div className='basis-1/2 flex flex-wrap gap-3 items-center relative'>
                {topics.map((topic,i)=>(
                  <button key={i} className='px-2 py-1 text-sm text-LightGreen bg-transparent border border-white/50 rounded'>{topic}</button>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id='last_section' className="relative px-8 md:px-24 pt-16 md:pt-32 bg-Grey/5">
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row md:gap-20'>
              <div className="order-2 md:order-1">
                <Image src={phone1} height={500} width={350} className='object-cover'/>
              </div>
              <div className='text-center order-1 md:order-2'>
                <h1 className='text-2xl font-bold text-DarkBlue md:mb-20 md:w-[23rem] whitspace-wrap'>Have meaningful discussions with amazing new friends.</h1>
                <GreenButton text='GET STARTED FOR FREE' className='relative top-44 md:static w-full md:w-auto'/>
              </div>
              <div className="hidden md:block order-3">
                <Image src={phone2} height={500} width={350} className='object-cover'/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
