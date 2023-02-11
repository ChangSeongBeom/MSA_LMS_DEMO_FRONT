import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "../api/axios";
import requests from "../api/requests";


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Signup() {
    const theme = createTheme();
    const [formData, setFormData] = useState({});
    axios.defaults.withCredentials = true;
    const URL = '/user-service/join'
    const URL2='/content-service/joinContent'

    useEffect(() => {
      const url = "http://localhost:8000/user-service/getAllUsers";
        axios.get(url,{
          withCredentials: false
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log("실패");
        })
    }, [])
    
      
    // useEffect(() => {
    //   const fetchData = async () => {

    //   const dad={
    //     loginId: "33",
    //     name: "33",
    //     password: "33",
    //     email:"33"
    //   }
    //     try {
    //       const response = await axios.post(URL, dad,{
    //         withCredentials:false
    //       })
            
    //       console.log(response)
    //     }
    //     catch (e) {
    //       console.log(e)
    //     }
    //   }
  
    //   fetchData()
    // }, [])

    // useEffect(() => {
    //   const fetchData = async () => {

    //   const dad={
    //     loginId: "33",
    //     description: "content3",
    //     contentLength: 30,
    //     capaNum:300
    //   }
    //     axios.post(URL2,dad,{
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': 'http://localhost:3000',
    //       },
    //     })
    //     .then(response=>{
    //       console.log(response);
    //     })
    //     .catch(error=>{
    //       console.err(error);
    //     })
    //   }
  
    //   fetchData()
    // }, [])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        fetchData(data);
        // useEffect(()=>{
        //     fetchData(data);
        // },[]);

        // console.log({
        //   loginId: data.get('loginId'),
        //   password: data.get('password'),
        //   name: data.get('name'),
        //   email: data.get('email'),
        // });
      };

    const fetchData= async(data) =>{
      const url = "/user-service/join"
      const header = {'Accept': 'application/json',
      'Content-Type': 'application/json',}
      const dad = {
        "loginId": "33",
        "name": "33",
        "password": "33",
        "email":"33"
      }
      axios.post(url, dad, header)
      .then(response => console.log(response.status))
      .catch(err => console.log(`Error Occured : ${err}`))
        // try{
        // const request=await axios.post("/user-service/join",data);
        // console.log(request.data);
        // }catch(error){
        //     console.error(error);
        // }
    }
    return (     
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                회원가입
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="loginId"
                  label="아이디"
                  name="loginId"
                  autoComplete="loginId"
                  autoFocus
                />

                
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="이메일"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
               
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  회원가입
                </Button>
                <Grid container>
                    <Link href="/" variant="body2">
                      {"뒤로가기"}
                    </Link>           
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      )
}

export default Signup