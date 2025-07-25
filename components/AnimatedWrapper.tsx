'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AnimatedWrapper = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
