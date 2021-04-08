import React from 'react';

const ErrorExample = () => {
  let title = "Initial text";
  const changeText = () => {
    title = "newText";
    console.log(title);
  };
  return <>
  <h1>{title}</h1>
        <button
        className='btn'
        type='button '
        onClick={changeText}> Change Title</button>
  </>;
  /**
   * This does not changes the text because it does not
   * re-render the component
   * 
   */
};

export default ErrorExample;
