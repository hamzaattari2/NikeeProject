import React from 'react'
import { reviews } from '../Constant/Index'
import ReviewCard from './ReviewCard'
const CustomerReviews = () => {
  return (
    <section className='max-container'>
        <h3 className='text-center text-4xl font-bold'>
          What Our <span className='text-red-500'>Customer</span> Says?
        </h3>
        <p className='text-center info-text m-auto mt-4 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eaque?</p>
        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col '>
{
  reviews.map((curEle)=>(
    <ReviewCard
      key={curEle.customerName}
      imgURL={curEle.imgURL}
      customerName={curEle.customerName}
      rating={curEle.rating}
      feedback={curEle.feedback}
    />
  ))
}
        </div>
    </section>
  )
}

export default CustomerReviews
