import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Alert from '@mui/joy/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
 

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //const postData=new FormData();
        
        // postData.append('loginId',data.get('loginId'))
        // postData.append('password',data.get('password'))
        // postData.append('name',data.get('name'))
        // postData.append('email',data.get('email'))

        fetchData(data);
      };

    const fetchData= (data) =>{
    
      const url = requests.join;
      console.log(url);
      axios.post(url,data,{
        headers: {
          "Content-Type": `application/json`,
        },
      })
        .then(function(response) {
          console.log(response);
          alert("회원가입 완료.");
          navigate("/main");
        
   

          
//           <Alert severity="success">
//   <AlertTitle>Success</AlertTitle>
//   This is a success alert — <strong>check it out!</strong>
// </Alert>
            console.log(response);
            

        })
        .catch(function(error) {
            console.log("실패");
        })
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