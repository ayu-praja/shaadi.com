import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login"
import Dashboard from './Dashboard';

function App() {
  const [login,setLogin] = useState(false);
  const handleSign=(status)=>{
    setLogin(status)
  }
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Shaadi.com</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>{login == true ? 'Log out':'Log in'}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" render={(props) => <Login handleSign={handleSign} {...props} />} />
            <Route path="/sign-in" render={(props) => <Login handleSign={handleSign} {...props} />} />
            <Route path="/Home" component={Dashboard} />
          </Switch>
        </div>
      
    </div></Router>
  );
}

export default App;