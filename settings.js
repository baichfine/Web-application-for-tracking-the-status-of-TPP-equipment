import React from 'react';
import update from 'immutability-helper';
import eye from './svg/eye.svg';
import eyeClose from './svg/eyeClose.svg';

export class Settings extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    nameBranchesArr: ["КТЭЦ-1","КТЭЦ-2","НЧТЭЦ","ЗГРЭС"],
    idBranchesArr: ["clickBranch2","","",""],
    stateBranchesArr: [true,false,false,false],
    hintsArr: ["Казанская теплоэлектроцентраль №1", "Казанская теплоэлектроцентраль №2","Набережночелнинская теплоэлектроцентраль","Заинская государственная районная электростанция"],
    usersArr: [["Стрелков Антон Парфеньевич","Кириллов Модест Ярославович","Ковалёв Пантелеймон Эльдарович","Беляков Велорий Онисимович","Фомин Афанасий Натанович"],["Авдеев Максим Леонидович","Пахомов Севастьян Платонович","Гущин Адольф Миронович","Селезнёв Владислав Русланович","Тихонов Харитон Андреевич"],["Туров Аристарх Макарович","Горбунов Игнатий Аркадьевич","Харитонов Вадим Агафонович","Рябов Ибрагил Донатович","Мартынов Августин Владленович"],["Михеев Натан Федотович","Брагин Феликс Матвеевич","Мясников Мирослав Кириллович","Рябов Степан Серапионович","Мамонтов Вадим Ярославович"]],
    rolesArr: [["Администратор","Управляющий","Куратор","Специалист филиала","Специалист филиала"],["Администратор","Управляющий","Куратор","Специалист филиала","Специалист филиала"],["Администратор","Управляющий","Куратор","Специалист филиала","Специалист филиала"],["Администратор","Управляющий","Куратор","Специалист филиала","Специалист филиала"]],
    choice: 0,
    choiceBranch: 0,
    usersNameArr: ["ФИО:","Филиал:","Роль:","Должность:","Логин:","Пароль:"],
    usersDataArr: ["Стрелков Антон Парфеньевич","КТЭЦ-1","Администратор","","",""],
    statementBut1: "write1",
    statementBut2: "view1",
    dateArr: ["21.03.2020","20.03.2020","19.03.2020","19.03.2020","19.03.2020","18.03.2020","18.03.2020","18.03.2020","17.03.2020","16.03.2020","15.03.2020","15.03.2020",],
    actionArr: ["Согласование отчёта","Редактирование данных (Ведомость котлоагрегата)","Заполнение (Ведомость котлоагрегата)","Редактирование данных (Расчёт ИТС)","Редактирование данных (Расчёт ИТС)","Заполнение (Расчёт ИТС)","Выбор оборудования (Котлоагрегат №2)","Вход в систему","Выход из системы","Сохранение данных (Ведомость котлоагрегата)","Заполнение (Ведомость котлоагрегата)","Вход в систему",],
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
logOrData = (button) => {
  if (button === "view1")
    this.setState((state, props) => ({
      statementBut1: "write2",
      statementBut2: "view2",
    }))
  else if (button === "write2")
    this.setState((state, props) => ({
      statementBut1: "write1",
      statementBut2: "view1",
    }))
}
createTableBranches = (e) => {
  var table = [];
  table=this.state.nameBranchesArr.map((obj,i)=> {
    return(<td key={i} title={this.state.hintsArr[i]} id={this.state.idBranchesArr[i]} onClick={(e)=>{this.clickBranchFunc(i,this.state.usersArr[i][0],obj,this.state.rolesArr[i][0]);}}><label>{this.state.nameBranchesArr[i]}</label></td>)
});
return table;
}
clickBranchFunc = (i,name,branch,role) => {
  this.state.stateBranchesArr.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        stateBranchesArr: update(state.stateBranchesArr,{[e]:  {$set: true}}),
        idBranchesArr: update(state.idBranchesArr,{[e]:  {$set: "clickBranch2"}}),
        choiceBranch: i,
        choice: 0,
        usersDataArr: [name,branch,role,"","",""],
        pass: "password",
        eye: eye,
      }))
    else
      this.setState((state, props) => ({
        stateBranchesArr: update(state.stateBranchesArr,{[e]:  {$set: false}}),
        idBranchesArr: update(state.idBranchesArr,{[e]:  {$set: ""}}),
      }))
  });
}
createTableUsers = (e) => {
  var table = [];
  table=this.state.usersArr[this.state.choiceBranch].map((obj,i)=> {
    if (this.state.choice === i) return (<tr key={i} className="hoverTrSettings" onClick={(e)=>{this.choiceFunc(i,obj,this.state.nameBranchesArr[this.state.choiceBranch],this.state.rolesArr[this.state.choiceBranch][i]);}}><td>{obj}</td><td>{this.state.nameBranchesArr[this.state.choiceBranch]}</td><td>{this.state.rolesArr[this.state.choiceBranch][i]}</td></tr>)
    else return(<tr key={i} id="hoverTrSettings" onClick={(e)=>{this.choiceFunc(i,obj,this.state.nameBranchesArr[this.state.choiceBranch],this.state.rolesArr[this.state.choiceBranch][i]);}}><td>{obj}</td><td>{this.state.nameBranchesArr[this.state.choiceBranch]}</td><td>{this.state.rolesArr[this.state.choiceBranch][i]}</td></tr>)
});
return table;
}
choiceFunc = (i,name,branch,role) => {
  this.setState({
    choice: i,
    usersDataArr: [name,branch,role,"","",""],
    pass: "password",
    eye: eye,
  })
}
createUsersDataTable = (e) => {
  var table = [];
  table=this.state.usersNameArr.map((obj,i)=> {
    if (i === 5) return(<tr key={i}><td>{obj}</td><td><input type={this.state.pass} value ={this.state.usersDataArr[i]} placeholder={"Введите "+obj}></input><img src={this.state.eye} alt={this.state.eye} onClick={(e)=>{this.eyeChange(e);}}/></td></tr>)
     return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.usersDataArr[i]} placeholder={"Введите "+obj}></input></td></tr>)
});
return table;
}
createTableLog = (e) => {
  var table = [];
  table=this.state.actionArr.map((obj,i)=> {
     return (<tr key={i}><td id="newSize">{this.state.usersDataArr[0]}</td><td>{obj}</td><td>{this.state.dateArr[i]}</td></tr>)
});
return table;
}
render(){
    return(<div className="statement">
        <div className="blockStatement">
          <div className = "settings">
              <div className = "settingsChoice">
              <table><tbody>
              <tr>{this.createTableBranches()}</tr>
              </tbody></table>
              </div>
              <div className ="settingsTab">
              <table><tbody>
              <tr className="colorOrange" id="weightBold"><td>Имя пользователя</td><td>Филиал</td><td>Роль</td></tr>
              {this.createTableUsers()}
              </tbody></table>
              </div>
              <div className ="settingsButton">
                <button>Добавить нового пользователя</button>
                <button>Удалить пользователя</button>
              </div>
          </div>
          <div className="allSettingsTab">
          <div className="settingsLogOrData">
          <button className={this.state.statementBut1}
          onClick={(e)=>{this.logOrData(this.state.statementBut1);}}>Личные данные</button>
          <button className ={this.state.statementBut2}
          onClick={(e)=>{this.logOrData(this.state.statementBut2);}}>Лог действий</button>
          </div>
            <div className="settingsUsersTab">
            <table><tbody>
            {(this.state.statementBut1 !== "write1")?(this.createTableLog()):(this.createUsersDataTable())}
            </tbody></table>
            </div>
            <div className="settingsButtonTab">
            <label className="colorOrange" id="weightBold">Ответственное лицо:</label>
            <label>Администратор</label><button>Сохранить</button>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default Settings;
