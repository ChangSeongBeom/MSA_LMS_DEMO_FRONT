import React from 'react'

function Main({isAuthenticated,setIsAuthenticated}) {
    console.log(isAuthenticated);
    console.log(setIsAuthenticated);
  return (
    <div>Masdsdsdin</div>
  )
}

export default Main
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Main() {
//     const [cookies, setCookies] = useState({});

//     useEffect(() => {
//       setCookies(getCookies());
//     }, []);

//     console.log(cookies);
//   return (
//     <div>Main</div>
//   )
// }

// function getCookies() {
//     const cookieString = document.cookie;
//     const cookieArray = cookieString.split(';');
//     const cookies = {};
//     cookieArray.forEach(cookie => {
//       const [key, value] = cookie.split('=');
//       cookies[key.trim()] = value;
//     });
//     return cookies;
//   }

// export default Main