import React from 'react'
import Button from './Button'
const Subcribe = () => {
  return (
    <section id='contact-us' className='max-container items-center justify-between flex max-lg:flex-col gap-10 '>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-bold'>sign up from<span className='text-red-600'> Updates</span> & Newsletter</h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-400 rounded-full">
        <input type="text" 
        placeholder='subcribe@nike.com'
          className='sm:flex-1 max-sm:w-full text-base leading-normal text-gray-500 pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-gray-500 max-sm:rounded-full'
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Sign up" fullwidth/>
        </div>
      </div>
    </section>
  )
}

export default Subcribe
