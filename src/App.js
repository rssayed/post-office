import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header';
import Login from './components/login';
import Delete_package from './components/delete_package';
import Profile from './components/profile';


function App() {
  return (
    <div className="App">
      <Router>
         {/*
         <Login />
         <Delete_package />*/}
         <Profile />
      </Router> 
    </div>
  );
}

export default App;