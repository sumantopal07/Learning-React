import React,{useState} from 'react';
//useState is a function coming from react
const UseStateBasics = () => {
  /**
   * console.log(useState());//returns array of size 2 [undefined,function]
   * console.log(useState('Hello'));//returns array of size 2 ['Hello',function]
   * function controls the value of useState[0]
   * 
   **/
  //CONVENTION
  const [text,setText] = useState('old title');

  const changeText =  () => {
    if(text === 'old title')
      setText('new title');
    else
      setText('old title')
  }
  return <>
    <h1>{text}</h1>
    <button type='button' className='btn'
    onClick={changeText}>change text</button>
  </>
};

export default UseStateBasics;
/**
 *    Rules of Hooks: 
 * --> must start with use
 * --> The component must be UpperCase
 * --> Hook must be invoked inside component body
 * --> cannot call setText inside conditional
 * --> 
 * 
 */
