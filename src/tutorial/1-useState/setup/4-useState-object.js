import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({ name: 'peter',
  age: 24,
  message: 'random message',
});
const update = () =>{
  setPerson({...person,name :'sumanto',message: 'new'});
}
  return <>
  <h2>{person.name}</h2>
  <h2>{person.age}</h2>
  <h2>{person.message}</h2>
  <button type='button' className='btn' 
  onClick={update}>update</button>
  </>;
};

export default UseStateObject;
