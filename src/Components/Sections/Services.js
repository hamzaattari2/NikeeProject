import React from 'react'
import {services} from '../Constant/Index';
import ServiceCard from './ServiceCard';
const Services = () => {
  return (
   <>
    <section className='max-container flex justify-center flex-wrap gap-9 '>
    
    {
      services.map((curele)=>(
        <ServiceCard key={curele.label} {...curele}/>
      ))
    }
    </section>
   </>
  )
}

export default Services
