import React from 'react'

const FooterBanner = () => {
  return (
    <div className='max-w-[100vw] mt-7 h-[540px]'>
        <div className="w-full bg-[url('/images/footerbanner.jpg')] bg-cover bg-center h-[70dvh] lg:h-[540px]"></div>
        <div className="absolute inset-0 flex flex-col items-center top-[30vh] lg:top-[20vh] text-white  text-center bg-transparent">
          <h1 className=" text-[17vw] lg:text-[160px] font-light tracking-widest">Elegance</h1>
          <button className="mt-4 px-6 py-2 bg-white text-black font-semibold border border-black hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
    </div>
  )
}

export default FooterBanner