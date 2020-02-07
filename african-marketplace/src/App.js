import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

// imported Components
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Nav from './components/Nav';
import VendorForm from './components/vendors/VendorForm'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={SignUp} />
      <Route path='/login' component={Login} />
      <Route path='/african-marketplace' component={Nav} />
      <Route exact path='/african-marketplace' component={Dashboard} />
      <Route path='/african-marketplace/sell' render={props => {
        return <VendorForm {...props}/> 
      }
      }/>
    </div>
  );
}

export default App;
