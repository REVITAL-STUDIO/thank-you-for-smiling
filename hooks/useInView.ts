import { useState, useEffect, RefObject } from 'react';

const useInView = (ref: RefObject<HTMLElement>): boolean => {
  const [inView, setInView] = useState(false);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setHasBeenViewed(true);
        } else if (!hasBeenViewed) {
          setInView(false);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, hasBeenViewed]);

  return inView || hasBeenViewed;
};

export default useInView;