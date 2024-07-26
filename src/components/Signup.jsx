import React from 'react';
import { Button, Container, Grid, TextField, Typography, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';

const textFieldStyles = {
  '& .MuiFilledInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
  '& .MuiFilledInput-underline:before': {
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
  },
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },
};

const containerStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '20px',
};

const formStyle = {
  width: '100%',
  maxWidth: '400px',
  padding: '30px',
  borderRadius: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  color: 'white',
  zIndex: '1',
  backdropFilter: 'blur(100px) brightness(300%)',
};

const Signup = () => {
  return (
    <div>
      <Container style={containerStyle}>
        <form style={formStyle}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h3" align="center" gutterBottom>
                Sign Up
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Name"
                variant="filled"
                fullWidth
                style={{ marginBottom: '10px' }}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Email"
                variant="filled"
                fullWidth
                style={{ marginBottom: '10px' }}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Password"
                variant="filled"
                fullWidth
                style={{ marginBottom: '10px' }}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Confirm Password"
                variant="filled"
                fullWidth
                style={{ marginBottom: '10px' }}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Phone Number"
                variant="filled"
                fullWidth
                style={{ marginBottom: '10px' }}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Address"
                variant="filled"
                fullWidth
                style={{ marginBottom: '10px' }}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="filled" fullWidth sx={textFieldStyles} style={{ marginBottom: '10px' }}>
                <InputLabel>Country</InputLabel>
                <Select>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="error"
                fullWidth
                style={{ marginTop: '1px' }}
              >
                Create Account
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <Typography sx={{ textAlign: 'left', marginLeft: '-150px' }}>
                  Already have an account?
                </Typography>
                <Button variant="text">Sign In</Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
