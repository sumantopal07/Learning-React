import React,{useEffect, useState} from 'react';

function App() {
  const [data,setData]=useState('posts'); 

  //runs every time our component renders
  
  // useEffect(()=>{
  //   if(data.length <10)
  //     setData((data)=> data);
  //   console.log("render");
  // },[data] /**Depends on values in the array 
  // [] : only once*/);

  //IDEAL USE_CASE
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
    .then(res => res.json())
    .then(res => console.log(res));
  },[data]);

  //ANOTHER USE_CASE is to log current Window Width
  const [info,setInfo] = useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener('resize',()=>setInfo(window.innerWidth));
  
    //cleanup whatever we did last time
    return () =>{
      console.log("exit");
      window.removeEventListener('resize',()=>setInfo(window.innerWidth));
    }
  },[data]);
  return (
    <>
    <div>
    <button onClick={()=> setData('posts')}>Posts</button>
    <button onClick={()=> setData('users')}>Users</button>
    <button onClick={()=> setData('comments')}>Comments</button>
    </div>
    <h1>{data}</h1>
    <h1>{info}</h1>
    </>
  );
}

export default App;
