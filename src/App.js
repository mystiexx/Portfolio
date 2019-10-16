import React, {Component } from 'react';
import './App.css';
import Home from './components/HomeTab/Home';
import Header from './components/HeaderTab/Header';

class App extends  Component{
  render(){
    return(
      <div className="body">
        <Header/>
        <Home/>
      </div>
    )
  }
}

export default App;
