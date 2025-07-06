import AnimatedWrapper from '@/components/AnimatedWrapper';
import FooterBanner from '@/components/FooterBanner';
import HeroBanner from '@/components/HeroBanner';
import Products from '@/components/Products';
import React from 'react';

const page = () => {
  return (
    <AnimatedWrapper>
      <HeroBanner />
      <div
        id="product-heading"
        className="flex flex-col items-center justify-center text-center mt-10"
      >
        <h1 className="text-4xl ">Discover Timeless Elegance</h1>
        <p className="mt-2">Curated jewelry to elevate every moment.</p>
      </div>
      <div>
        <Products />
      </div>
      <FooterBanner />
    </AnimatedWrapper>
  );
};

export default page;
