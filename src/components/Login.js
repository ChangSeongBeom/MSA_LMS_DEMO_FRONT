import React from 'react';
import { Routes, Route } from 'react-router';
import Signup from './Signup';
import Main from './Main';
import LoginHome from './LoginHome';
function Login() {
    return(
    <Routes>
      <Route path="/" element={<LoginHome/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/main" element={<Main/>} />
    </Routes>
    )
    
}

export default Login