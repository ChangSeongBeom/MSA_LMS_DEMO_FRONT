import React, { useEffect,useState } from 'react'

import axios from "../../api/axios";
import requests from "../../api/requests";
import RegisterContentList from './RegisterContentList';
import './Register.css';
import Cookies from 'js-cookie';
import OutlinedInput from '@mui/material/OutlinedInput';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';

function Register() {


  
    const [contentsList,setContentsList]=useState([]);
    console.log(contentsList);
    useEffect(() => {
      fetchData();
    }, [])
    
    const fetchData= () =>{
        const url = requests.getAllContents;
        axios.get(url, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`
          }
        })
          .then(function(response) {
            setContentsList(response.data);

          })
          .catch(function(error) {
              console.log(error);
          })
    }  
    
  return (
    <div className='learning'>
      <div className='learningSearch'>
        <div className='learningSelect'>
          <div className='learningwrap'>
           <p>교육형태</p>
            <select>
              <option>전체</option>
              <option>전체1</option>
              <option>전체2</option>
            </select>

            <p className='pp'>과정구분</p>
            <select>
              <option>전체</option>
              <option>전체1</option>
              <option>전체2</option>
            </select>
            </div>
            <div className='learningwrap2'>
              <p>과정명</p>
              <textarea className='search'>입력</textarea>
            </div>
        </div>
        <div className='learningSpace'>
          <button>검색</button>
        </div>
      </div>
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

