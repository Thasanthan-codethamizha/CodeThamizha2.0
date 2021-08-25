
import React,{useEffect, useState} from 'react'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {LinkContainer} from 'react-router-bootstrap'
import APIService from '../ApiService';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
function SignUp() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [phone_number,setPhone_number] =useState('')
    const [full_name,setFull_name]=useState('')
    const [termsagree,setTermsagree]=useState(false)

    const [token,setToken,removeToken]=useCookies(['mytoken'])
    let history =useHistory()
    const classes = useStyles();

    const registerBtn=()=>{
      if(termsagree==true){
      APIService.RegisterUser({username,password,email,full_name,phone_number})
      .then(resp => {
        console.log(resp)
        history.push('/signin')
      })
      .catch(error => console.log(error))
      }
      else{
        alert("You must agree to the terms")
      }
  }

    useEffect(()=>{
      if(token['mytoken']){
          history.push('/profile')
      }
  },[token])
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/*<LockOutlinedIcon />*/}
          </Avatar>
          <h1>
            Sign up
          </h1>
          <form className={classes.form} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="uname"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="yourName"
                  label="Your Name"
                  name="yourName"
                  autoComplete="yourName"
                  onChange={(e) => setFull_name(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone Number"
                  name="phonenumber"
                  autoComplete="phonenumber"
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  onChange={(e) => {
                    setTermsagree(e.target.checked)
                    if(e.target.checked==true){
                    alert("Terms")
                    }
                  }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={registerBtn}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkContainer to="/signin">
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
                </LinkContainer>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    );
  }
export default SignUp
