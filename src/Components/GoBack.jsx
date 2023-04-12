import React from 'react'
import { useNavigate } from 'react-router-dom';

export const GoBack = () => {
    const navigate = useNavigate();

    function handleGoBack() {
      navigate(-1);
    }
  return (
    <div className='w-full m-3'>
       <button
        className="bg-red-400 hover:bg-red-500 text-gray-800 p-4 h-14 rounded-full left-10 absolute z-10 flex justify-center items-center"
        onClick={handleGoBack}
      >
       Go Back!
      </button>
      </div>
  )
}
