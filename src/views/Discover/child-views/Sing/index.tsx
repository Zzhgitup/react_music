import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './style';
export default function Anmina() {
  return (
    <Container>
      <motion.div
        className="box"
        initial={{ opacity: 0, height: '0px' }}
        animate={{ opacity: 1, height: '150px' }}
      />
    </Container>
  );
}
