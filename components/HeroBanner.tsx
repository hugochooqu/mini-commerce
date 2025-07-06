import React from 'react';

const HeroBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row  max-w-[100vw]   h-[540px]">
      <div className="w-full lg:w-1/2 bg-[url('/images/bg-img-1.jpg')] bg-cover bg-center h-[100dvh] lg:h-auto"></div>
      <div className="w-full lg:w-1/2 bg-[url('/images/bg-img-2.jpg')] bg-cover bg-center h-[50vh] lg:h-auto hidden lg:block"></div>

      <div className="absolute inset-0 flex flex-col items-center top-[30vh] md:top-[20vh] text-white  text-center bg-transparent">
        <h1 className="relative text-[17vw] md:text-[10vw] lg:text-[160px] font-light tracking-widest">
          El<span className="font-milven">é</span>gance
        </h1>
        <button className="mt-4 px-6 py-2 bg-white text-black font-semibold border border-black hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
