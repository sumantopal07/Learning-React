import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  //this runs after every render
  const [value,setValue]=useState(0);
  useEffect(()=>{
    console.log('call component');
    if(value!==0)
    document.title=`New Messages(${value})`;
  },[value]);
  // value: runs everytime value changed
  // []: only runs first time (page loaded)
  // can have multiple useEffects in the app


  console.log('render component');
  return <>
  <h1>{value}</h1>
  <button className='btn' 
  onClick={()=> setValue(value+1)}>button</button>
  </>;
};
/**
 * UseEffect will run everytime,
 * the component renders
 * 
 */

export default UseEffectBasics;
