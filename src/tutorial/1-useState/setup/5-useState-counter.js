import React, { useState } from 'react';

const UseStateCounter = () => {
  const [num,setNum]=useState(0);

  const weirdIncrease = () => {
    setTimeout ( ()=>{
      setNum((old)=>{
        const newNum = old+1;
        return newNum;
      });
    },2000);
  }
  return <>
  <h2>{num}</h2>
  <button type='button' onClick={weirdIncrease} className='btn'>+1</button>
  <br></br>
  <button type='button' onClick={()=> setNum(num-1)} className='btn'>-1</button>
  <button type='button' onClick={()=> setNum(0)} className='btn'>reset</button>
  </>;
};

export default UseStateCounter;
