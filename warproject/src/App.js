import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Registration from './Components/Registration'

import AdminHome from './Components/AdminHome'
import Login from './Components/Login';
import About from './Components/About';
import UserHome from './Components/UserHome';

function App() {
  return (
  <div>
   
   
    
     <Switch>
     <Route exact path='/' component={Registration}></Route> 
     <Route exact path='/login' component={Login}></Route>
     <Route exact path='/about' component={About}></Route>
     <Route exact path='/register' component={Registration}></Route>
            <Route exact path='/adminhome' component={AdminHome} />
            <Route exact path='/userhome' component={UserHome}></Route>
     </Switch>
  
    </div>
  );
}

export default App;
