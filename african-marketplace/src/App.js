import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

// imported Components
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={SignUp} />
      <Route path='/login' component={Login} />
      <Route path='/african-marketplace' component={Dashboard} />
    </div>
  );
}

export default App;
