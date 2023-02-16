import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Learning({contentsList,idx}) {
  console.log(contentsList);
  const cards = [1, 2, 3];
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
         
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

    </ThemeProvider>
    // <div>
    //     <div>이름   {contentsList[idx].contentName}</div>
    //     <div>설명   {contentsList[idx].description}</div>
    //     <div>콘텐츠 길이   {contentsList[idx].contentLength}</div>
    //     <div>수용인원   {contentsList[idx].capaNum}</div>
    //     <div>조회수   {contentsList[idx].hitNum}</div>
    //     <div>좋아요수   {contentsList[idx].likeNum}</div>
    //     <div>별점   {contentsList[idx].rating}</div>
    //     <div>업로드날짜   {contentsList[idx].creDtm}</div>

    //     <br/>
        
    // </div>
  )
}

export default Learning