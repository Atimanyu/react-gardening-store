import { useState, useEffect } from 'react';
import './Scroll.css'
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
      <>
        {isVisible && (
          <button id="scroll-button" className={isVisible ? 'show' : ''} onClick={scrollToTop}>
            {'\u2191'}
          </button>
        )}
      </>
    );
};

export default ScrollToTopButton;
