import React from 'react'

const FooterBanner = () => {
  return (
    <div className="relative max-w-[100vw] mt-7 h-[540px]">
      {/* Background Image */}
      <div className="w-full bg-[url('/images/footerbanner.jpg')] bg-cover bg-center h-full" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-[17vw] lg:text-[230px] font-light tracking-widest italic">
          Timeless
        </h1>
      </div>
    </div>
  )
}

export default FooterBanner
