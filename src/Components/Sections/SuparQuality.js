import React from 'react'
import Button from './Button'
import { shoe8 } from '../images'

const SuparQuality = () => {
  return (
    <>
      <section id='about-us' className='flex justify-between items-center max-xl:flex-col gap-10 w-full max-container'>
<div className='flex flex-1 flex-col  '>

          <h2 className="text-black capitalize  font-palan-quin text-4xl lg:max-w-lg font-bold">
           We Provided You
          <span className="text-red-600  "> Supper
          </span> 
            <span className="text-red-600 "> Quality
            </span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg  text-gray-400 text-lg leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, vel est dolores nemo fuga quasi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, vel est dolores nemo fuga quasi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, vel est dolores nemo fuga quasi!
          </p>
          <p className='mt-6 lg:max-w-lg text-gray-400 text-lg leading-7'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, vel est dolores nemo fuga quasi!
          </p>
          <div className="mt-11">
          <Button label="View detail"  />
          </div>
          </div>

<div className='flex  flex-1 justify-center items-center '>
<img src={shoe8} alt="shoe8" 
  width={570}
  height={522}
  className='object-contain'
/>
</div>
      </section>
    </>
  )
}

export default SuparQuality
