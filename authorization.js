import React from 'react';
import eye from './svg/eye.svg';
import eyeClose from './svg/eyeClose.svg';

export class Authorization extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    pass: "password",
    eye: eye,
    error: false,
  };
}

eyeChange = (e) => {
  if (this.state.pass === "password"){
  this.setState({
    pass: "text",
    eye: eyeClose
  })
}
else {
  this.setState({
    pass: "password",
    eye: eye
  })
}
}
errorAlert = (e) => {
  setTimeout(() => {
  this.setState({ error: false });
}, 4000);
}
authorization = (e) => {
  this.setState ({
    error: true,
  })
  this.props.authorization(e);
}

render(){
    return(<div className="authorization">
        <table className="tableAuth"><tbody>
        <tr><td><p>Авторизуйтесь, чтобы начать работу</p></td></tr>
        <tr><td><input type="text" placeholder = "Ваш логин" value = {this.state.login}></input></td></tr>
        <tr><td><input type={this.state.pass} placeholder = "Пароль" value = {this.state.password}></input><img src={this.state.eye} alt={this.state.eye} onClick={(e)=>{this.eyeChange(e);}}/></td></tr>
        {(this.state.error === true) ? (<tr><td>{this.errorAlert()}<span>Ошибка, неверный логин или пароль</span></td></tr>):(<tr><td><span>&nbsp;</span></td></tr>)}
        <tr><td><button onClick={(e)=>{this.authorization(e);}}>Войти</button></td></tr>
        </tbody></table>
      </div>)
  }
}

export default Authorization;
