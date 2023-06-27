import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import Authorization from './authorization.js';
import Administrator from './administrator.js';
import Manager from './manager.js';
import Curator from './curator.js';
import BranchSpecialist from './branchSpecialist.js';


class App extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    authorizated: false,
    user: "administrator",
  };

}
//Авторизация
authorization = (e) => {
this.setState ({
  authorizated: !this.state.authorizated
})
}

render(){
  if (this.state.authorizated === false) return(<Authorization authorization={this.authorization}/>)
  else if (this.state.authorizated === true && this.state.user === "administrator") return(<Administrator authorization={this.authorization}/>)
  else if (this.state.authorizated === true && this.state.user === "manager") return(<Manager/>)
  else if (this.state.authorizated === true && this.state.user === "curator") return(<Curator/>)
  else return(<BranchSpecialist/>)
  }
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
