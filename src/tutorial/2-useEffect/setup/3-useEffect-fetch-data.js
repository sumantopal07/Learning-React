import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUser] = useState([]);
  const fetchUser = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUser(res.map((item) => {
          const newObject = {
            login: item.login,
            avatar_url: item.avatar_url,
            url: item.html_url
          }
          return newObject;
        }
        ));

      });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  //if empty argument then it will result in infinite loop
  //thus []
  return <ul className='users'>
    {users.map((item, index) => {
      return (
        <li key={index}>
          <img src={item.avatar_url} alt='' />
          <div>
            <h4>{item.login}</h4>
            <a href={item.url}>profile</a>
          </div>
        </li>
      );
    })}
  </ul>

};

export default UseEffectFetchData;
