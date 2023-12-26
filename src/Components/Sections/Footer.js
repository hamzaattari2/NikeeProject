import React from 'react'
import { footerLogo } from '../images'
import { footerLinks, socialMedia } from '../Constant/Index'
import { copyrightSign } from '../icons'

const Footer = () => {
  return (
    <section className='max-container'>
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
      <div className='flex flex-col items-start'>
<a href="/">
  <img src={footerLogo} 
  width={150}
  height={46} alt="footerlogo" />
</a>
<p className='text-white mt-6 text-base leading-7 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi modi harum temporibus soluta nihil incidunt corrupti quidem eligendi aliquam voluptatum!</p>
<div className="flex items-center gap-5 mt-8">
{
socialMedia.map((curEle)=>(
<div className="flex w-12 h-12 justify-center items-center bg-white rounded-full">
<img src={curEle.src} alt="curEle.alt" width={24} height={24} />
</div>
))

}
</div>
    </div>
    <div className=" flex flex-1  justify-between lg:gap-10 gap-20 flex-wrap ">
      {
        footerLinks.map((section)=>(
          <div key={section}>
        <h4 className='text-white text-2xl leading-normal font-medium mb-6'>{section.title} </h4>
        <ul>
          {
            section.links.map((link)=>(
              <li className='mt-3 text-white text-base leading-normal hover:text-gray-400 cursor-pointer'key={link.name}>
              <a> {link.name}</a>
              </li>
            ))
          }
        </ul>
          </div>
        ))
      }

    </div>
      </div>
      <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center'>
<div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
<img src={copyrightSign} alt="cory right" width={20}  height={20} className='rounded-full m-0'/>
<p>Copyright. All  rights reserved</p>
</div>
<p className='text-white'>Terms and Condition</p>

      </div>
    </section>
  )
}

export default Footer
