import { useFollowPointer } from '@/hooks/singHooks';
import React, { memo, useRef } from 'react';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { Container } from './style';

interface Props {
  children?: ReactNode;
}

const Sing: FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);
  const springConfig = {
    damping: 20,
    stiffness: 200,
    restDelta: 0.001
  };

  return (
    <Container>
      <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{ type: 'spring', ...springConfig }}
      />
    </Container>
  );
};

export default memo(Sing);
