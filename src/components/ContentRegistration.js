import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import axios from "../api/axios";
import requests from "../api/requests";

import {
    Typography,
    AppBar,
    Toolbar,
    TextField,
    Button,
    Box
  } from "@material-ui/core";
  import Chip from '@mui/material/Chip';

import '../css/ContentRegistration.css';

function ContentRegistration() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=document.getElementById("content-form");
     
        const data=new FormData(form);
        // console.log(data.get("contentName"));
        // console.log(data.get("description"));
        // console.log(data.get("contentLength"));
        // console.log(data.get("capaNum"));
        fetchData(data);
    }

    
    const fetchData= (data) =>{
    
        const url = requests.joinContent;
        console.log(url);
        axios.post(url,data,{
          headers: {
            "Content-Type": `application/json`,
          },
        })
          .then(function(response) {
            console.log(response);
            alert("회원등록.");

          })
          .catch(function(error) {
              console.log("실패");
          })
      }

    return(
        <div>
            <Header></Header>
            <div className='content'>
                <Chip className="contentRegister" label="콘텐츠 등록" />
                <form id="content-form">
                    <TextField
                    name="contentName"
                    style={{ width: "500px", margin: "5px" }}
                    type="text"
                    label="콘텐츠 이름"
                    variant="outlined"
                    />
                    <br/>

                    <TextField
                    name="description"
                    style={{ width: "500px", margin: "5px" }}
                    type="text"
                    label="설명"
                    variant="outlined"
                    />
                    <br/>

                    <TextField
                    name="contentLength"
                    style={{ width: "500px", margin: "5px" }}
                    type="text"
                    label="콘텐츠 길이"
                    variant="outlined"
                    />
                    <br/>

                    <TextField
                    name="capaNum"
                    style={{ width: "500px", margin: "5px" }}
                    type="text"
                    label="수용인원"
                    variant="outlined"
                    />
                    <br/>


               
                    <Button className="contentSave" variant="contained" color="primary" onClick={(e)=>{       
                        handleSubmit(e);
                    }}>
                    save
                    </Button>
                 </form>
                <Footer></Footer>
                </div>
                </div>
    )
}

export default ContentRegistration