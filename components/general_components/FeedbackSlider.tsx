import React,{useState} from 'react'
import FeedbackCard from './FeedbackCard'
import {MdArrowForwardIos} from "react-icons/md"
import {MdArrowBackIos} from "react-icons/md"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FeedbackSlider = ({feedbacks}:any) => {
  const responsive:any = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

 const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

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
         <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="">
           {feedbacks.map((feedback:any,index:number)=>(
              <FeedbackCard key={index} feedback={feedback} />     
            ))}
         </Carousel>
        {/* <div className='relative flex flex-nowrap scrolltype'>
            {feedbacks.map((feedback:any,index:number)=>(
                <div key={feedback.id} className={index===current?'opacity-1 transition ease duration-1000 scale-105':'opacity-0 transition ease duration-1000'}>
                    {index===current&& <FeedbackCard  feedback={feedback} />}
                   
                </div>
            ))}
            <div className='absolute -bottom-10 right-0 flex gap-4'>
                <MdArrowBackIos size={24} className='text-Green cursor-pointer' onClick={prevCard}/>
                <MdArrowForwardIos size={24} className='text-Green cursor-pointer' onClick={nextCard}/>       
            </div>
        </div> */}
      </div>
    
  )
}

export default FeedbackSlider