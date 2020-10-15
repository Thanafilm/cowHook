import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import home from './pages/home'
import log from './pages/user/login'
import signup from './pages/user/signup'
function App() {
  return (
    <div className="App">
       <Router>
            <Route exact path = '/' component ={home} />
            <Route path = '/login' component = {log}/>
            <Route path = '/signup' component = {signup}/>
        </Router>
    </div>
  );
}

export default App;
