import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom';
import axios from "../../api/axios";
import requests from "../../api/requests";

function RegisterContentDetail() {
    const {id}=useParams(); 
    console.log(id);

    useEffect(() => {
      fetchData();
    }, [])
    
    const fetchData= () =>{
        const url= requests.getContent;
        axios.get(`${url}${id}`)
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
    }
  return (
    <div>RegisterContentDetail</div>
  )
}

export default RegisterContentDetail