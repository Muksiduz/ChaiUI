import React, { useEffect, useState } from 'react';

const words = ['Developer', 'Designer', 'YouTuber', 'Freelancer'];

const TypingAnimation = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [showText, setShowText] = useState('');

  useEffect(() => {
    let charIndex = 0;
    const currentWord = words[wordIndex];
    const interval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setShowText(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1000);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [wordIndex]);

  return (
    
      <div className="text-4xl sm:text-5xl text-black font-normal">
        I'm a{' '}
        <span className="text-[#FC6D6D] font-semibold border-r-2 border-[#FC6D6D] pr-1 animate-blink">
          {showText}
        </span>
      </div>
   
  );
};

export default TypingAnimation;
