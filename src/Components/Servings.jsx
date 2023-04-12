import React from 'react'
import ServingsIcon from "../assets/Icons/Servings.png"

export const Servings = ({servings}) => {
  return (
    <div className='h-full w-1/2 flex p-1'><img src={ServingsIcon} alt="" className='max-w-full max-h-full' /><p className='w-full text-center m-auto text-2xl'>{servings}</p></div>
  )
}
