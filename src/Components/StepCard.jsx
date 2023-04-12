import React from 'react'

export const StepCard = (step) => {
  const stepData = step.step
  return (
    <div className='border-2 border-black rounded-3xl m-2'>
      <div className='flex items-center gap-10 p-7'>
        <p className='text-3xl'>{stepData.number}</p>
        <p className='text-xl'>{stepData.step}</p>
      </div>
    </div>
  )
}
