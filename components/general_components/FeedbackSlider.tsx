import React,{useState} from 'react'
import FeedbackCard from './FeedbackCard'
import {MdArrowForwardIos} from "react-icons/md"
import {MdArrowBackIos} from "react-icons/md"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FeedbackSlider = ({feedbacks}:any) => {

  const[current,setCurrent]=useState(0);
  const length = feedbacks.length;

  const nextCard=()=>{
    setCurrent(current==length-1?0:current+1)
  }

   const prevCard=()=>{
    setCurrent(current==0?length-1:current-1)
  }

  if(!Array.isArray(feedbacks)||feedbacks.length<=0){return null}

  return (
      <div className=''>
        <div className='relative flex flex-nowrap scrolltype'>
            {feedbacks.map((feedback:any,index:number)=>(
                <div key={feedback.id} className={index===current?'opacity-1 transition ease duration-1000 scale-105':'opacity-0 transition ease duration-1000'}>
                    {index===current&& <FeedbackCard  feedback={feedback} />}
                   
                </div>
            ))}
            <div className='absolute -bottom-10 right-0 flex gap-4'>
                <MdArrowBackIos size={24} className='text-Green cursor-pointer' onClick={prevCard}/>
                <MdArrowForwardIos size={24} className='text-Green cursor-pointer' onClick={nextCard}/>       
            </div>
        </div>
      </div>
    
  )
}

export default FeedbackSlider