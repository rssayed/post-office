import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header';
import Login from './components/login';


function App() {
  return (
    <div className="App">
      <Router>
        <Login />
      </Router> 
    </div>
  );
}

export default App;