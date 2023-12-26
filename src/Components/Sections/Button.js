import React from 'react'

const Button = ({label,iconUrl,backgroundColor,borderColor,textColor,fullwidth}) => {
  return (
    <>
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none 
        ${backgroundColor
        ?`${backgroundColor} ${textColor} ${borderColor}`
        :"bg-red-600  text-white border-red-500"
       
       } rounded-full ${fullwidth && 'w-full'}"}`}>
            
            {label}
            {iconUrl && <img src={iconUrl} alt="iconUrl"
            className='ml-2 rounded-full w-5 h-5' />}
        </button>
    </>
  )
}

export default Button
