import React from 'react';
import PersonalArea from './personalArea.js';
import Equipment from './equipment.js';
import Statement from './statement.js';
import Its from './its.js';
import Failures from './failures.js';
import Settings from './settings.js';
import PersonalData from './personalData.js';
import Notifications from './notifications.js';
import update from 'immutability-helper';
import Cookies from 'js-cookie';
import alert from './svg/alert.svg';



export class Administrator extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    nameButtonsArr: ["Филиал и оборудование","Ведомости","Индекс технического состояния","Отказы оборудования","Настройки"],
    pagesArr: [<Equipment choiceBranchAndEquip={this.choiceBranchAndEquip}/>,<Statement />,<Its />,<Failures />,<Settings />],
    personalAreaStateArr: [false, false],
    pagesArr2:[<PersonalData />, <Notifications />],
    personalArea: false,
    personalAreaID: "",
    branchAndEquip: Cookies.get('branch'),
    test: 0
  };
}
/* Хедер */
personalAreaFunc = (e) => {
  if (this.state.personalAreaID === "clickButton")
    this.setState ({
      personalArea: !this.state.personalArea,
      personalAreaID: ""
    })
  else
    this.setState ({
      personalArea: !this.state.personalArea,
      personalAreaID: "clickButton"
    })
}
clickButtonFunc = (i) => {
  this.state.pagesArr.forEach((obj,e)=> {
    if (i === e)
      this.setState ({
        test: e,
        personalAreaStateArr: [false, false],
      })
  });
}
clickClassButton = (e) => {
  if (e === this.state.test)
    return "clickButton"
  else
    return ""
}
createButtons = (e) => {
  var table = [];
  if (typeof(this.state.branchAndEquip)!== "undefined" && this.state.nameButtonsArr[0] === "Филиал и оборудование"){
    this.setState((state, props) => ({
      nameButtonsArr: update(state.nameButtonsArr,{0:  {$set: state.branchAndEquip}}),

    }))
  }
  table=this.state.pagesArr.map((obj,i)=> {
    return(<td key={i}><button id={this.clickClassButton(i)} onClick={(e)=>{this.clickButtonFunc(i);}}>{this.state.nameButtonsArr[i]}</button></td>)
});
return table;
}
choiceBranchAndEquip = (branchAndEquip) => {
  Cookies.set('branch',branchAndEquip, { path: '/' });
  this.setState((state, props) => ({
    nameButtonsArr: update(state.nameButtonsArr,{0:  {$set: branchAndEquip}}),
  }))
}
createBody = (e) => {
  var table = [];
  table=this.state.pagesArr.map((obj,i)=> {
    if (this.state.test === i)
    return(<div key={i}>{this.state.pagesArr[i]} </div>);
    return null;
});
return table;
}
componentWillUnmount() {
  document.removeEventListener('click', this.handleClickOutside, false);
}
UNSAFE_componentWillMount() {
  document.addEventListener('click', this.handleClickOutside, false);
}
/*handleClickOutside = (e) => {
  const personalModal = document.querySelector('.personalModal');
  const personalArea = document.querySelector('.personalArea');
  console.log(e.target);
  console.log(e.target.contains(personalArea));
  if (!e.target.contains(personalModal) && !e.target.contains(personalArea))
  this.setState({
    personalArea: false,
    personalAreaID: ""
  })
}*/
createPersonalAndNotiFunc = (j)=> {
  var table = [];
  table=this.state.personalAreaStateArr.map((obj,i)=> {
    if (this.state.personalAreaStateArr[i] === true)
    return(<div key={i}>{this.state.pagesArr2[i]} </div>);
    return null;
});
return table;
}
showPersonalOrNotiFunc = (i) => {
  if (i === 0)
    this.setState ({
      personalAreaStateArr: [true, false],
      clickButtonsArr: ["","","","","",],
      stateButtonsArr: [false,false,false,false,false],
      personalArea: false,
    })
  else
    this.setState((state, props) => ({
      personalAreaStateArr: [false, true],
      clickButtonsArr: ["","","","","",],
      stateButtonsArr: [false,false,false,false,false],
      personalArea: false,
    }))
}

render(){
  return(<div>
          <div className = "headAdm">
            <div className = "personalArea"><button id={this.state.personalAreaID} onClick={(e)=>{this.personalAreaFunc(e);}}>Личный кабинет <span id="yellow">(4)<img src={alert} alt="alert"/></span></button></div>
            <table><tbody><tr>
              {this.createButtons()}
            </tr></tbody></table>
          </div>
          <div className = "bodyAdm">
          {(this.state.personalArea === true)?(<PersonalArea showPersonalOrNotiFunc={this.showPersonalOrNotiFunc} authorization={this.props.authorization}/>):(null)}
          {this.createBody()}
          {this.createPersonalAndNotiFunc()}
          </div>
      </div>)
  }
}

export default Administrator;
