import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const fetchUser = () => {
    fetch(url).then((res) => res.json())
      .then((res) => {
        setUser({
          login: res.login,
          image: res.avatar_url,
          url: res.html_url
        })
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchUser();
  }, []);
  console.log("render"+ loading);
  if (loading)
    return <h2>Loading..</h2>
  return <div className='item'>
    <img src={user.image} alt='' />
    <h4>{user.login}</h4>
    <a href={user.url}>profile</a>
  </div>;
};

export default MultipleReturns;
