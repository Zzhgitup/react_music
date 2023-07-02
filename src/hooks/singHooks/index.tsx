import { useEffect, useState } from 'react';
import { RefObject } from 'react';
/* interface Props {
  childern?: ReactNode;
  ref: RefObject<HTMLElement>;
} */
export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPint] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (!ref.current) return;
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current;
      if (element == null) return;
      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPint({ x, y });
    };
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);
  return point;
}
