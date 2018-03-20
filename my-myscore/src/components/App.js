import React, { Component } from 'react';
import HomePage from './HomePage/HomePage';
import LeaguePage from './LeaguePage/LeaguePage';
import TeamInfoPage from './TeamInfoPage/TeamInfoPage'
import './App.css';


import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path ='/' component={HomePage}/>
      <Route exact path ='/home' component={HomePage}/>
      <Route exact path ='/leaguePage' component = {LeaguePage}/>
      <Route exact path ='/teamInfoPage' component = {TeamInfoPage}/>
      <Redirect to="/home"/>
    </Switch>

  )
};

export default App;
