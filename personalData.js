import React from 'react';
import eye from './svg/eye.svg';
import eyeClose from './svg/eyeClose.svg';

export class PersonalData extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    usersNameArr: ["ФИО:","Филиал:","Роль:","Должность:","Логин:","Пароль:"],
    usersDataArr: ["Иванов Иван Иванович","КТЭЦ-1","Администратор","Руководитель СПО","ivanov","123456"],
    pass: "password",
    eye: eye,
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
createUsersDataTable = (e) => {
  var table = [];
  table=this.state.usersNameArr.map((obj,i)=> {
    if (i === 5) return(<tr key={i}><td>{obj}</td><td><input type={this.state.pass} value ={this.state.usersDataArr[i]} placeholder={"Введите "+obj}></input><img src={this.state.eye} alt={this.state.eye} onClick={(e)=>{this.eyeChange(e);}}/></td></tr>)
     return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.usersDataArr[i]} placeholder={"Введите "+obj}></input></td></tr>)
});
return table;
}

render(){
  return(<div className="statement">
      <div className="blockStatement">
        <div className="personalDataTab">
          <div className="dataTab">
          <h2>Личные данные</h2>
          <table><tbody>
            {this.createUsersDataTable()}
          </tbody></table>
          <div className="personalButtonTab">
          <label className="colorOrange" id="weightBold">Ответственное лицо:</label><label>Администратор</label><button>Сохранить</button>
          </div>
          </div>
        </div>
      </div>
  </div>)
  }
}

export default PersonalData;
