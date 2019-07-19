import React from 'react';
import './App.css';
import Home from './Pages/Home';
import contactus from './Pages/contactus';
import Error from './Pages/Error';
import SingleRoom from './Pages/SingleRoom';
import Room from './Pages/Rooms';
import { Router, Link, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact = "true" component={Home}/>
        
        <Route path="/Room/" exact = "true" component={Room}/>
        <Route path="/Room/:slug" exact = "true" component={SingleRoom}/>
        <Route path="/contactus" exact = "true" component={contactus}/>
        <Route path="/:slug" exact = "true" component={Error}/>
     </Switch>
    </div>
  );
}

export default App;
