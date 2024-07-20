import React from 'react'
import '../style/landing.css'
import { Button, Card, CardContent,Typography } from '@mui/material'
// import video from '../assets/video.mp4';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
   display: flex;
  justify-content:space-evenly;
  gap: 20px; 
  margin-top: 50px;
`;

const StyledCard = styled.div`
  max-width: 400px;
  max-height:350px;

  background-color: rgba(255, 255, 255, 0.4); 
  backdrop-filter: blur(10px) brightness(200%); 
  box-shadow: 0 8px 16px rgba(0,0,0,0.1); 
  border: 1px solid rgba(255, 255, 255, 0.1); 
  border-radius:10px;
  padding: 0;
  place-items: centre;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`;


const Landing = () => {
  console.log("Landing component rendered");
  return (
    
    <div>
    
      <div className="video-background">
     
      {/* <video autoPlay muted loop id="background-video">
        <source src={video}type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>  */}
        <div className="title">
          <Typography variant="h1">FINANCE</Typography>
           <Typography variant="h2">Tracking System</Typography> 
          <p>The purpose of the Personal Finance Management App is to provide users with a platform to
manage their personal finances effectively by tracking income, expenses, setting budgets, and
achieving financial goals.</p>
      </div>
    </div>
      <Button id='btn'>
        <Link to='/signup' className='link'>
     
        Get Started </Link >
      </Button>
      <Button id='btn1'><Link to='/login' className='link' >Login</Link></Button>
      <Button id='btn2'> <Link to='/signup' className='link'>
     Create Account </Link ></Button> 
      <Button id='btn3'>About</Button>

      <div id="card1">
        <Container>
<StyledCard >
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="id1" sx={{textAlign:'center'}}>
          User
        </Typography>
            <Typography gutterleft variant="body1" component="div" id="id2" sx={{ textAlign: 'left' }}>
              
              Users can log in with their email and password or
              sign up by providing a username, email, and password. Upon logging in, they are redirected to their dashboard. The dashboard allows users to track
              income and expenses by logging details such as amount, category, date, and description, and view their transaction history.
       </Typography>
      </CardContent>
        </StyledCard>
        



        <StyledCard >
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="id1" sx={{textAlign:'center'}}>
          Admin
        </Typography>
            <Typography gutterleft variant="body1" component="div" id="id2" sx={{ textAlign: 'left' }}>
              
            The admin dashboard includes user management, allowing admins to view and manage user accounts, and expense management, enabling admins to view and manage expenses logged by users.
       </Typography>
      </CardContent>
          </StyledCard>
          </Container>
    </div>
    
    </div>
  )
}

export default Landing