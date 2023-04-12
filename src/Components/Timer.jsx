import React, { useState } from 'react'
import TimerIcon from "../assets/Icons/Timer.png"

export const Timer = ({timer}) => {
let time
  if (Math.floor(timer/60)){
    time =`${Math.floor(timer/60)}h ${timer-Math.floor(timer/60)*60}m`
  } else {
    time = `${timer}m`
  }
  return (
    <div className='h-full  w-1/2  flex p-1'><img src={TimerIcon} alt="" className='max-w-full max-h-full' /><p className='w-full text-center m-auto text-lg'>{time}</p></div>
  )
}
