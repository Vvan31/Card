"use client";
import { useEffect, useState } from 'react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-2 rounded-full bg-black text-white shadow-lg transition-opacity w-14 h-w ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.8s' }}
    >
      ↑
    </button>
  );
};

export default ScrollUpButton;
