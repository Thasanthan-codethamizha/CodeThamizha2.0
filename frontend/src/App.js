
import React, { useEffect, useState,Suspense, lazy } from 'react';
import './App.css';
import { HashRouter as Router,Switch,Route } from 'react-router-dom';


import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Profile from './components/Profile';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './components/SignUp';
import {useCookies} from 'react-cookie'

import Footer from './components/Footer';

import Peoples from './pages/Peoples';
import Userprofile from './components/Userprofile';
import Loadingscreen from './pages/Loadingscreen';
import CustomSwitch from './CustomSwitch';
import Singleblog from './pages/Post';
import Support from './pages/Support';
import Event from './pages/Event';


function App() {
  const [token,setToken]=useCookies(['mytoken'])
  const [scroll, setScroll] = useState(0);
 
  
  
    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });
  return (
    <>
      <Router>
        <Header/>
        <div id="progressBarContainer">
                <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
            </div>
       
        <CustomSwitch>
          <Route path='/' exact component={Home} />
         
          <Route path='/blogs' component={Blogs} />
          <Route path='/posts/:blogtitle/:id' exact component={Singleblog} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/community' exact component={Peoples} />
          <Route path='/users/:username' exact component={Userprofile} />
          <Route path='/support' exact component={Support} />
          <Route path='/events/:name/:id' exact component={Event} />
        </CustomSwitch>
        
        <Footer/>
      </Router>
    </>
  );
}

export default App;
