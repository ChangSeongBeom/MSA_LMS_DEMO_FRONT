import React from 'react'
import axios from "../../api/axios";
import requests from "../../api/requests";
import './ContentRegistration.css'
import {TextField,Button} from "@material-ui/core";
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
function ContentRegistration() {

    const navigate = useNavigate();
    console.log( Cookies.get('userId'));
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=document.getElementById("content-form");
     
        const data=new FormData(form);
        data.set("loginId",Cookies.get('loginId'));
        // console.log(data.get("contentName"));
        // console.log(data.get("description"));
        // console.log(data.get("contentLength"));
        // console.log(data.get("capaNum"));
        fetchData(data);
    }

    
    const fetchData= (data) =>{
        console.log(data.g);
        const url = requests.joinContent;
        console.log(url);
        axios.post(url,data,{
          headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`,
            "Content-Type": `application/json`,
            
          },
        })
          .then(function(response) {
            console.log(response);
            alert("콘텐츠 등록됐어.");
            navigate("/register");

          })
          .catch(function(error) {
              console.log("실패");
          })
      }

    return(
        <div>
     
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
        
                </div>
                </div>
    )
}

export default ContentRegistration