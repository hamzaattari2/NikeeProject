import React from 'react'
import headerlogo from '../Components/images/header-logo.svg'
import hamburger from '../Components/icons/hamburger.svg'
import { navLinks } from './Constant/Index'
const NavBar = () => {
  return (
   <>
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
           <a href="/">
            <img src={headerlogo} alt="logo"
            width={130}
            height={29}
         />
           </a>
           <ul className=' flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
             {
                navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href} className='font-monts errat leading-normal text-lg text-slate-800 '
                        > {item.label}</a>
                    </li>
                ))
             }
           </ul>
           <div className='hidden max-lg:block'>
            <img src={hamburger} alt="hamburger"
            height={25}
            width={25} />
           </div>
        </nav>
    </header>
   </>
  )
}

export default NavBar
