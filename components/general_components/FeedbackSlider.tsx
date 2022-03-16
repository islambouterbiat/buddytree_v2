import React, { useEffect, useState } from 'react'
import FeedbackCard from './FeedbackCard'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdArrowBackIos } from 'react-icons/md'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const FeedbackSlider = ({ feedbacks }: any) => {
  const [current, setCurrent] = useState(0)
  const length = feedbacks.length

  // useEffect(()=>{
  //   const slideInterval=setInterval(()=>{
  //     setCurrent(current=>current<length-1?current+1:0)
  //   },3000)
  //   return ()=>clearInterval(slideInterval)
  // },[])

  const nextCard = () => {
    setCurrent(current == length - 1 ? 0 : current + 1)
  }

  const prevCard = () => {
    setCurrent(current == 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(feedbacks) || feedbacks.length <= 0) {
    return null
  }

  return (
    <div className="relative">
      <div className="flex flex-nowrap w-[19rem] md:w-[40rem] overflow-hidden pt-10 ">
        {feedbacks.map((feedback: any, index: number) => (
          <div
            key={feedback.id}
            className='transition ease duration-1000 md:pr-4'
            style={{transform:`translate(${-100*current}%)`}}
          >
            <FeedbackCard feedback={feedback} />
          </div>
        ))}
        <div className="absolute -bottom-10 right-0 flex gap-4">
          <MdArrowBackIos
            size={24}
            className="cursor-pointer text-Green"
            onClick={prevCard}
          />
          <MdArrowForwardIos
            size={24}
            className="cursor-pointer text-Green"
            onClick={nextCard}
          />
        </div>
      </div>
    </div>
  )
}

export default FeedbackSlider
