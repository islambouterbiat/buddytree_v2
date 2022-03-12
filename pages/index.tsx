import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GreenButton from '../components/general_components/GreenButton'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>BodyTree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full mx-auto ">
        <section id='hero_section' className='bg-Blue py-20 px-24 '>
          <div className='flex justify-between items-center max-w-7xl mx-auto'>
            <div className='w-96'>
              <h1 className='text-2xl font-semibold text-white mb-14'>A space to have meaningful discussions and make long-lasting friendships.</h1>
              <GreenButton text="GET STARTED FOR FREE"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
