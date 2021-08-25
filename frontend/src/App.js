import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './components/SignUp';
import {useCookies} from 'react-cookie'
import Profile from './components/Profile';
import People from './components/People';


function App() {
  const [token,setToken]=useCookies(['mytoken'])
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/people' exact component={People} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
