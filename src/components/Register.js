import React, { useEffect,useState } from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import axios from "../api/axios";
import requests from "../api/requests";
import Learning from '../common/Learning';

function Register() {
    const [contentsList,setContentsList]=useState([]);

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
    <div>
        <Header></Header>
        {
            contentsList.map((content,idx)=>
                <Learning contentsList={contentsList} idx={idx}/>
            )
        }
        <Footer></Footer>
    </div>
  )
}

export default Register