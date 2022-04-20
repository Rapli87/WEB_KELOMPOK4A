import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Destination from './components/pages/Destination';
import SignUp from './components/pages/SignUp';
import SignIn from './sign-in/SignIn';
// import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services}/>
        <Route path='/destination' component={Destination}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' component={SignIn}/>
        {/* <Route path='/dashboard' component={Dashboard}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
