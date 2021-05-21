import React from 'react';
import LoginForm from './LoginForm';
import Users from './Users';
import ToDo from './ToDo';
import Logout from  './Logout';
import { BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import SignUp from './.history/signup_20210517130102';

class Routes extends React.Component{

render(){
    return(
      <Router>
    <switch>
        
   <Route path="/signup"> <SignUp /> </Route>

  </switch>
  </Router>)
  }

}

export default Routes;
  