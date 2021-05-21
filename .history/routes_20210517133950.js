import React from 'react';
import { BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import SignUp from './signup.js'


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
  