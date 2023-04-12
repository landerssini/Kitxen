import React, { useRef } from 'react';

const Carousel = ({ children }) => {
  
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 1550;
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 1550;
    }
  };

  return (
    <div className="flex items-center relative w-full">
     <button
        className="bg-red-400 hover:bg-red-500 text-gray-800 w-14 h-14 font-bold rounded-full left-10 absolute z-10 flex justify-center items-center"
        onClick={handlePrevClick}
      >
        <i className="material-icons">chevron_left</i>
      </button>
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll px-20 scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {children}
      </div>
      <button
        className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold  w-14 h-14 rounded-full absolute right-10 z-10 flex justify-center items-center"
        onClick={handleNextClick}
      >
        <i className="material-icons">chevron_right</i>
      </button>
    </div>
  );
};

export default Carousel;