import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1  sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] 
    shadow-2xl px-10 py-16'>
      <div className='bg-red-700 w-11 h-11 flex rounded-full justify-center items-center'>
     <img src={imgURL} alt="" 
        width={28} height={28}
        className='object-contain'
     />
      </div>
      <h3 className='mt-5 font-serif text-3xl leading-normal font-bold'>{label}</h3>
      <p className='mt-3 break-words font-mono text-lg leading-normal text-gray-400'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
