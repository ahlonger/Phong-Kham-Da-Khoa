import { useEffect, useRef } from "react";

const useRevealOnScroll = (options = { threshold: 0.1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active"); // Loại bỏ active khi ra khỏi khung nhìn
          }
        });
      },
      options
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return elementRef;
};

export default useRevealOnScroll;