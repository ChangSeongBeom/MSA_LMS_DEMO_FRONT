import axios from "../../api/axios";
import requests from "../../api/requests";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function LoginHome() {
    const theme = createTheme();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
      const data = new FormData(event.currentTarget);
      const url=requests.login;
      console.log(data);
        axios.post(url,data,{
          headers: {
            "Content-Type": `application/json`,
    
          },
        })
          .then(function(response) {
            const cookie = response.headers.get("token");
            const userId = response.headers.get("userId");
            console.log(response.headers);
            Cookies.set("token",cookie);
            Cookies.set("userId",userId);
          // console.log("Response headers:", response.body); 
            console.log(response);         
            alert("로그인완료");
            navigate("/main");

          })
          .catch(function(error) {
            alert("로그인 불가");
          })
      };

   
    
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
                교육 LMS 데모
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  로그인
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      비밀번호 분실하였나요?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"회원가입"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
   
          </Container>
        </ThemeProvider>
      )
}

export default LoginHome