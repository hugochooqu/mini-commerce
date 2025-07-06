import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="flex flex-row gap-2 items-center justify-center py-6">
      <p>2025 Elegance All rights reserved</p>
      <p className="flex flex-row gap-2">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
