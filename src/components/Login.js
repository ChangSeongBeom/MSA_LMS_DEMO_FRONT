import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Main from './Main';
import LoginHome from './LoginHome';
import ContentRegistration from './ContentRegistration';
import Register from './Register';
import Footer from '../common/Footer';
import Header from '../common/Header';
function Login() {
    return(
    <div className="App">
    <Router>
      <Header/>
      <Routes>    
          <Route path="/" element={<LoginHome/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/registerContent" element={<ContentRegistration/>} />
          <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
    )
    
}

export default Login