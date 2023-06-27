import React from 'react';
import update from 'immutability-helper';

export class Notifications extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    nameBranchesArr: ["КТЭЦ-1","КТЭЦ-2","НЧТЭЦ","ЗГРЭС"],
    idBranchesArr: ["clickBranch2","","",""],
    stateBranchesArr: [true,false,false,false],
    hintsArr: ["Казанская теплоэлектроцентраль №1", "Казанская теплоэлектроцентраль №2","Набережночелнинская теплоэлектроцентраль","Заинская государственная районная электростанция"],
    usersArr: [["Беляков Велорий Онисимович","Фомин Афанасий Натанович"],["Селезнёв Владислав Русланович","Тихонов Харитон Андреевич"],["Рябов Ибрагил Донатович","Мартынов Августин Владленович"],["Рябов Степан Серапионович","Мамонтов Вадим Ярославович"]],
    rolesArr: [["Специалист филиала","Специалист филиала"],["Специалист филиала","Специалист филиала"],["Специалист филиала","Специалист филиала"],["Специалист филиала","Специалист филиала"]],
    choice: 0,
    choiceBranch: 0,
    usersDataArr: ["Беляков Велорий Онисимович","КТЭЦ-1","Специалист филиала","","",""],
    usersStatementArr: [["1","2"],["1","2"],["1","2"],["1","2"]],
    usersEquepmentArr: [["Котлоагрегат №1","Котлоагрегат №6"],["Котлоагрегат №2","Котлоагрегат №1"],["Котлоагрегат №3","Котлоагрегат №4"],["Котлоагрегат №5","Котлоагрегат №2"]],
    usersDateArr: [["22.05.2020","23.05.2020"],["19.05.2020","19.05.2020"],["18.05.2020","20.05.2020"],["19.05.2020","18.05.2020"]],
    usersStatusArr: [["1","3"],["1","2"],["2","2"],["2","3"]],

  };
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
  })
}
createTableNoti = (e) => {
  var table = [];
  var j = this.state.choiceBranch;
  var n = this.state.choice;
  table=this.state.usersStatusArr[j].map((obj,i)=> {
    return (<tr key={i} id="hoverTrSettings"><td>{this.state.usersArr[j][n]}</td><td>{(this.state.usersStatementArr[j][i] === "1")?("Ведомость котлоагрега"):("Расчёт ИТС котлоагрегата")}</td><td>{this.state.usersEquepmentArr[j][i]}</td><td>{this.state.usersDateArr[j][i]}</td>
    {(this.state.usersStatusArr[j][i] === "1")?(<td id="black">На Согласовании</td>):((this.state.usersStatusArr[j][i] === "2")?(<td id="green">Согласован</td>):(<td id="red">Отклонен</td>))}</tr>)
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
            <table id="sizeTab"><tbody>
            <tr className="colorOrange" id="weightBold"><td>Имя пользователя</td>
            <td>Филиал</td><td>Роль</td></tr>
            {this.createTableUsers()}
            </tbody></table>
            </div>
        </div>
        <div className="allSettingsTab">
            <div className="settingsLogOrData">
              <h2><label>Отчёты на согласование</label></h2>
            </div>
            <div className="notiTab">
            <table><tbody>
            <tr className="colorOrange" id="weightBold"><td>Имя пользователя</td>
            <td>Отчёт</td><td>Оборудование</td><td>Дата</td><td>Статус</td></tr>
            {this.createTableNoti()}
            </tbody></table>
            </div>
            <div className="settingsButtonTab">
              <label className="colorOrange" id="weightBold">Ответственное лицо:</label><label>Администратор</label><button>Сохранить</button>
            </div>
        </div>
      </div>
    </div>)
  }
}

export default Notifications;
