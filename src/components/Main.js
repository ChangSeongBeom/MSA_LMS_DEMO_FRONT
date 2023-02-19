import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';

function Main() {

  return (
    <div>

    </div>
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