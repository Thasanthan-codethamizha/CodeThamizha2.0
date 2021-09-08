import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';

import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './components/SignUp';
import {useCookies} from 'react-cookie'
import Profile from './components/Profile';
import Footer from './components/Footer';
import Blogs from './pages/Blogs';
import Peoples from './pages/Peoples';


function App() {
  const [token,setToken]=useCookies(['mytoken'])
  return (
    <>
      <Router>
        <Header/>
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/community' exact component={Peoples} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
