import { useRef, useState, useCallback } from 'react';
import type { MouseEvent } from 'react';

interface MagneticReturn {
  ref: React.RefObject<HTMLElement>;
  style: { transform: string };
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleMouseMove: (e: MouseEvent<HTMLElement>) => void;
}

export function useMagnetic(strength = 0.3): MagneticReturn {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = useCallback((): void => setIsHovering(true), []);
  const handleMouseLeave = useCallback((): void => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>): void => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      setPosition({ x: distanceX * strength, y: distanceY * strength });
    },
    [strength],
  );

  const transform = isHovering
    ? `translate(${position.x}px, ${position.y}px)`
    : 'translate(0px, 0px)';

  return {
    ref,
    style: { transform },
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };
}
