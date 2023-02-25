import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from '../SignUp/Signup';
import Main from '../Main/Main';
import LoginHome from './LoginHome';
import ContentRegistration from '../ContentRegistrarion/ContentRegistration';
import Register from '../Register/Register';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import RegisterContentDetail from '../Register/RegisterContentDetail';
import './Login.css';

function Login() {
    return(
    <div className="Login">
    <Router>
      <Header/>
      <Routes>    
          <Route path="/" element={<LoginHome/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/registerContent" element={<ContentRegistration/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/detail/:id" element={<RegisterContentDetail />}/>
      </Routes>
     
    </Router>
    </div>
    )
    
}

export default Login