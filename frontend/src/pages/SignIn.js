import React, { useState ,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {LinkContainer} from 'react-router-bootstrap'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'
import APIService from '../ApiService';
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },  
    image: {
      backgroundImage: 'url(http://192.168.1.12/images/thasa.jpg)',
      backgroundRepeat: 'no-repeat',  
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#2083F8',
    },
    form: {
        
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      width: '100%',
      backgroundColor: '#2083F8',
    },
  }));
  
function SignIn() {
    const classes = useStyles();
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const [token,setToken]=useCookies(['mytoken'])
    const [isLogin,setLogin]=useState(true)
    let history =useHistory()

    
    const loginBtn=()=>{
        APIService.LoginUser({username,password})
        .then(resp => typeof(resp.token) != "undefined" ? setToken('mytoken',resp.token) :setToken('') )
        .catch(error => console.log(error))
        
    }

    useEffect(()=>{
      if(token['mytoken']){
          history.push('/')
      }
  },[token])
    
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              
            </Avatar>
            <h1>Sign In </h1>
            <div className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Username"
                autoComplete="username"
                autoFocus
                onChange={e=>setUsername(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e=>setPassword(e.target.value)}
              />
              
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={loginBtn}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                    {/*
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>*/}
                </Grid>
                <Grid item>
                    <LinkContainer to='/sign-up'>
                  <Link href="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  </LinkContainer>
                </Grid>
              </Grid>
              <Box mt={5}>
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }

export default SignIn;
