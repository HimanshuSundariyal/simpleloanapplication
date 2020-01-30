import React from 'react';
import './App.css';
import HomePage from './components/homepage';
import Login from './components/login';
import LoanApplication from './components/loanapplication';
import Signup from './components/userSignup';
import Thanku from './components/thanku';
import Loanapplicationlist from './components/loanapplicationslist';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <React.Fragment>
    <Router>
    <React.Fragment>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/loanapplication" component={LoanApplication} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/thanku" component={Thanku} />
        <Route exact path="/loanapplicationslist" component={Loanapplicationlist} />
        </Switch>
        </React.Fragment>
    </Router>
    </React.Fragment>
  );
}

export default App;
