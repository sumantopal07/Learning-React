import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight));
  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight));
    });
    //cleanup function 
    return () => {
      window.removeEventListener('resize', () => {
        setSize(Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight));
      });
    }
  });
  /**
   * may lead to memory leak because increased amount of invoke to eventListner
   */
  return <>
    <h1>window</h1>
    <h2>{size} PX</h2>
  </>;
};

export default UseEffectCleanup;
