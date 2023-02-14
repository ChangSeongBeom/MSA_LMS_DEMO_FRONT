import React from 'react';
import { Routes, Route } from 'react-router';
import Signup from './Signup';
import Main from './Main';
import LoginHome from './LoginHome';
import ContentRegistration from './ContentRegistration';

function Login() {
    return(
    <Routes>
      <Route path="/" element={<LoginHome/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/register" element={<ContentRegistration/>} />
    </Routes>
    )
    
}

export default Login