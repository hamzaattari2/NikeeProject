import React from 'react'
import { star } from '../icons'

const ReviewCard = ({imgURL,feedback,customerName,rating}) => {
  return (
<>
    <div className="flex flex-col items-center justify-center ">
<img src={imgURL} alt="customer"
className='object-cover rounded-full w-[120px] h-[120px]' />
<p className='mt-6 max-w-sm text-center text-gray-500'>{feedback}</p>
<div className='mt-3 flex justify-center items-center gap-2.5'>
    <img src={star} 
     width={24}
     height={24} className='object-contain m-0' alt="start" />
     <p className='text-xl text-gray-500 '>({rating})</p>
</div>
<h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </div>
    </>
  )
}

export default ReviewCard
