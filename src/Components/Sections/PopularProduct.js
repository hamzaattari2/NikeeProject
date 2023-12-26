import React from 'react'
import { products } from '../Constant/Index'
import PopularProductCard from './PopularProductCard'
const PopularProduct = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
    <div className="flex flex-col justify-start gap-5">
 <h2 className='text-4xl font-palanquin font-bold'>Our  <span className='text-red-600'>Popular</span> Products</h2>
 <p className='lg:max-w-lg mt-2 font-montserrat text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, eligendi!</p>
  </div>
  <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
  {
    products.map((curele)=>(
<PopularProductCard key={curele.name} {...curele}/>   
))
  }
  </div>
 </section>
  )
}

export default PopularProduct
