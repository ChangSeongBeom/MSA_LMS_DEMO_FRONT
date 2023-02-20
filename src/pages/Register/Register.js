import React, { useEffect,useState } from 'react'

import axios from "../../api/axios";
import requests from "../../api/requests";
import RegisterContentList from './RegisterContentList';
import './Register.css';

function Register() {
    const [contentsList,setContentsList]=useState([]);
    console.log(contentsList);
    useEffect(() => {
      fetchData();
    }, [])
    
    const fetchData= () =>{
        const url = requests.getAllContents;
        axios.get(url)
          .then(function(response) {
            setContentsList(response.data);

          })
          .catch(function(error) {
              console.log(error);
          })
    }  
    
  return (
    <div className='learning'>
      <div className='learningList'>
          {
              contentsList.map((content,idx)=>
                  <RegisterContentList contentsList={contentsList} idx={idx}/>
              )
          }
      
      </div>
    </div>
  )
}

export default Register