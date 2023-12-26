import React from 'react'
import { offer } from '../images'
import Button from './Button'
import { arrowRight } from '../icons'
const Special = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10
     max-container '>
      <div className='flex-1 '>
        <img src={offer} alt="" 
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div> 
      <div className='flex flex-1 flex-col  '>

          <h2 className="text-black capitalize  font-palan-quin text-4xl lg:max-w-lg font-bold">
           
          <span className="text-red-600  "> Special
          </span> Offer
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
          <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="Learn more"
            backgroundColor="bg-white"
            borderColor='border-gray'
            textColor='white'
          />
          </div>
          </div>
    </section>
  )
}

export default Special
