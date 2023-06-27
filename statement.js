import React from 'react';
import update from 'immutability-helper';
import checkMark from './svg/checkMark.svg';
import danger from './svg/danger.svg';
import MonthStatement from './monthStatement.js';

export class Statement extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    nameParamsArr: ["Паропроизводительность", "Температура питательной воды","Присосы воздуха в топку","Присосы воздуха в газовый тракт","КПД котла \"брутто\"", "Уд. расход эл/эн. на тягу и дутье","Сопротивление газового тракта","Скорость ДВ/ДС","Коэффициент избытка воздуха","Температура уходящих газов","Содержание в дым. газах NOx"],
    hintsArr: ["Измеряется в т/ч", "Измеряется в \u{2103}","Измеряется в %","Измеряется в %","Измеряется в %","Измеряется в кВт.ч/Гкал","Измеряется в мм.в.ст.","","","Измеряется в \u{2103}","Измеряется в мг/нм\u{00B3}"],
    classNameTabArr:["leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab"],
    normValueTabArr: ["0","1","2","3","4","5","6","7","8","9","10"],
    valueTabArr: ["","","","","","","","","","",""],
    dateRepairsArr: ["Дата последнего капитального ремонта","Дата последнего текущего ремонта","Дата следующего капитального ремонта","Дата следующего текущего ремонта"],
    monthArr: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь","Год(2020)"],
    idMonthArr: ["clickMonth","","","","","","","","","","","","",],
    clickMonthArr: [true,false,false,false,false,false,false,false,false,false,false,false,false],
    yearArr: ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
    idYearArr: ["","","","","","","","","","","","","colorYear"],
    statementBut1: "write1",
    statementBut2: "view1",
    selectedFuel: "",
    colorP1: "",
    colorP2: "",
    lastLineColor: "leftTextTab",
    idYear: "",
    choiceYear: false
  };
}
//Заполнить ведомость
//Дата
seeDateFunc = (e) => {
  var d=new Date(), day, month, year;
  day = d.toLocaleDateString().split('.')[0];
  month = d.toLocaleDateString().split('.')[1];
  year = d.toLocaleDateString().split('.')[2];
  return (year + "-" + month + "-" + day);
}
seeMonthFunc = (e) => {
var d=new Date();
return (this.state.monthArr[d.getMonth()]);
}
//Кнопки "Заполнить" и "Просмотр"
clickStatementButtonFunc = (button) => {
  if (button === "view1")
    this.setState((state, props) => ({
      statementBut1: "write2",
      statementBut2: "view2"
    }))
  else if (button === "write2")
    this.setState((state, props) => ({
      statementBut1: "write1",
      statementBut2: "view1"
    }))
}
//Таблица ввода параметров
createTableStatement = (e) => {
  var arr = this.state.nameParamsArr, table = [], j = 0;
    table =arr.concat(arr).map((obj,i)=> {
      if (i % 2 === 0){
        if (i !== 0) j++;
        return(<tr className="lineTab" id ="tabGray" key={i}><td className = {this.state.classNameTabArr[j]} rowSpan="2" title={this.state.hintsArr[j]}><label>{arr[j]}</label></td><td id="noLine" className="rightTextTab" title = "Нормальное значение параметра">Норма:</td><td>{this.state.normValueTabArr[j]}</td><td rowSpan="2">{(parseFloat(this.state.valueTabArr[j]) > parseFloat(this.state.normValueTabArr[j]))?(<img title="Значение параметра не соответствует норме." src={danger} alt="danger"/>):((parseFloat(this.state.valueTabArr[j]) <= parseFloat(this.state.normValueTabArr[j]))?(<img title="Значение параметра соответствует норме." src={checkMark} alt="checkMark"/>):(null))}</td></tr>)
      }
      else return(<tr className="lineTab" key={i}><td className="rightTextTab" title = "Фактическое значение параметра">Факт:</td><td><input  onClick={(e)=>{this.classNameTabFunc(Math.floor(i/2));}} type="number" placeholder = "Введите значение" value={this.state.valueTabArr[Math.floor(i/2)]} onChange={(e)=>{this.changeValueTabFunc(e, Math.floor(i/2));}}></input></td></tr>)
});
return table;
}
radioButtonFuelFunc = (e) => {
  this.classNameTabFunc(11);
  if (e === true) {
    this.setState ({
      selectedFuel: true,
      colorP1: "colorOrange",
      lastLineColor: "newleftTextTab",
      colorP2: "",
    })
  }
  else {
    this.setState ({
      selectedFuel: false,
      colorP2: "colorOrange",
      lastLineColor: "newleftTextTab",
      colorP1: "",
    })
  }
}
classNameTabFunc = (i) => {
  this.state.classNameTabArr.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        classNameTabArr: update(state.classNameTabArr,{[e]:  {$set: "newleftTextTab"}}),
      }))
    else
      this.setState((state, props) => ({
        classNameTabArr: update(state.classNameTabArr,{[e]:  {$set: "leftTextTab"}}),
        lastLineColor: "leftTextTab"
      }))
  });
}
changeValueTabFunc = (e, i) => {
  var value = e.target.value;
  this.setState((state, props) => ({
    valueTabArr: update(state.valueTabArr,{[i]:  {$set: value}}),
  }))
}
//Таблица отклонений от нормы
createDateAndDeviationFunc = (e) => {
  var table = [];
    table =this.state.normValueTabArr.map((obj,i)=> {
      if (parseFloat(this.state.valueTabArr[i]) > parseFloat(obj)) {
        return(<div key={i}>
          <p>Причина отклонения <span id="weightBold" className="colorOrange">{this.state.nameParamsArr[i]}</span></p><textarea name="text"></textarea>
          <p>Мероприятия по устарнению замечаний <span id="weightBold" className="colorOrange">{this.state.nameParamsArr[i]}</span></p><textarea name="text"></textarea>
          <p>Плановая дата устранения: <input type="date" name="calendar"></input></p>
        </div>)
      }
      return null;
    });
return table;
}
//Таблица дат ремонта
createDateRepairsFunc = (e) => {
  var arr = this.state.dateRepairsArr, table = [], j=0;
    table =arr.concat(arr).map((obj,i)=> {
      if (i % 2 === 0){
        if (i !== 0) j++;
        return(<tr key={i}><td colSpan="2"><label>{arr[j]}</label></td><td id = "topCenter" className="colorOrange">Организация:</td></tr>)
      }
      else return(<tr key={i}><td><input type="date" name="calendar"></input></td><td><input type="date" name="calendar"></input></td><td><input type="text" placeholder="Название организации"></input></td></tr>)
    });
return table;
}
//Просмотр ведомостей
//Месяцы
createButtonsMonthAndYearFunc = (e) => {
  var table = [];
    table =this.state.monthArr.map((obj,i)=> {
        return(<td key={i}><label className="labelMonthAndYear" id={this.state.idMonthArr[i]} onClick={(e)=>{this.changeMonth(i);}}>{obj}</label></td>)
    });
return table;
}
changeMonth = (i) => {
  this.state.monthArr.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        clickMonthArr: update(state.clickMonthArr,{[e]:  {$set: true}}),
        idMonthArr: update(state.idMonthArr,{[e]:  {$set: "clickMonth"}}),
      }))
    else
      this.setState((state, props) => ({
        clickMonthArr: update(state.clickMonthArr,{[e]:  {$set: false}}),
        idMonthArr: update(state.idMonthArr,{[e]:  {$set: ""}}),
      }))
  });
}
clickMonthFunc = (e) => {
  var table = [];
  table=this.state.clickMonthArr.map((obj,i)=> {
    if (this.state.clickMonthArr[i] === true)
    return(<div key={i}><MonthStatement year={i} month ={this.state.monthArr[i]}/> </div>);
    return null;
});
return table;
}
choiceYearFunc = (e) => {
  if (this.state.choiceYear === true) this.id ="";
  else this.id = "labelYearClick";
this.setState({
  idYear: this.id,
  choiceYear: !this.state.choiceYear,
})
}
showYearModalFunc = (e) => {
  var table = [];
    table =this.state.yearArr.map((obj,i)=> {
        return(<tr key={i}><td><label className="year" id={this.state.idYearArr[i]} onClick={(e)=>{this.clickYear(obj, i);}}>{obj}</label></td></tr>)
    });
return table;
}
clickYear = (obj, i) => {
  this.state.yearArr.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        monthArr: update(state.monthArr,{12:  {$set: "Год("+obj+")"}}),
        idYearArr: update(state.idYearArr,{[e]:  {$set: "colorYear"}}),
      }))
    else
      this.setState((state, props) => ({
        idYearArr: update(state.idYearArr,{[e]:  {$set: ""}}),
      }))
  });
}
//Таблица Ведомость
componentWillUnmount() {
  document.removeEventListener('click', this.handleClickOutside, false);
}
UNSAFE_componentWillMount() {
  document.addEventListener('click', this.handleClickOutside, false);
}
handleClickOutside = (e) => {
  const yearModal = document.querySelector('.yearModal');
  const year = document.querySelector('.labelYear');
if (yearModal !== null &&  year !== null) {
  if (!e.path.includes(yearModal) && !e.path.includes(year))
  this.setState({
    choiceYear: false,
    idYear: ""
  })
}
}

render(){
    return(<div className="statement">
      <div className="buttons">
        <button className={this.state.statementBut1} onClick={(e)=>{this.clickStatementButtonFunc(this.state.statementBut1);}}>Заполнить ведомость</button><button className ={this.state.statementBut2} onClick={(e)=>{this.clickStatementButtonFunc(this.state.statementBut2);}}>Просмотр ведомостей</button>
      </div>
      {(this.state.statementBut1 === "write1")?(<div className="blockStatement">
      <div className = "statementTab">
        <table><tbody>
          <tr><td id="weightBold"> Параметр технического состояния</td><td className="colorOrange" id="weightBold" colSpan="3"> Значение параметра</td></tr>
          {this.createTableStatement()}
          <tr id="lineTabLast">
            <td colSpan="2" className ={this.state.lastLineColor}> Топливо (газ, мазут)</td>
            <td colSpan="2"><p className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedFuel === true} onChange={(e)=>{this.radioButtonFuelFunc(true);}} /><span className="label"></span>Газ</label></p>
            <p className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedFuel === false} onChange={(e)=>{this.radioButtonFuelFunc(false);}} /><span className="label"></span>Мазут</label></p></td></tr>
        </tbody></table>
      </div>
      <div className="allTab">
      <div className="dateAndDeviationTab">
        {this.createDateAndDeviationFunc()}
      </div>
      <div className="dateRepairsTab">
      <table><tbody>
        {this.createDateRepairsFunc()}
        </tbody></table>
        <table className="matchingTab"><tbody>
          <tr><td className="colorOrange" id="weightBold">Текущий месяц:</td><td>{this.seeMonthFunc()}</td></tr>
          <tr><td className="colorOrange" id="weightBold">Дата ввода информации:</td><td><input type="date" name="calendar" value={this.seeDateFunc()}></input></td></tr>
          <tr><td className="colorOrange" id="weightBold">Ответственное лицо:</td><td>Администратор</td></tr>
          <tr><td colSpan="2"><button>Отправить на согласование</button></td></tr>
          </tbody></table>
        </div>
        </div>
      </div>):(
      <div className ="buttonsMonthAndYear">
      <table className="tabMonthAndYear"><tbody><tr>
        {this.createButtonsMonthAndYearFunc()}
        <td><label className="labelYear" id={this.state.idYear} onClick={(e)=>{this.choiceYearFunc(e);}}>Выбрать год</label></td>
        </tr></tbody></table>
        {(this.state.choiceYear === true)?(<div className="yearModal">
        <table><tbody>
        {this.showYearModalFunc()}
        </tbody></table>
        </div>):(null)}
        {this.clickMonthFunc()}
      </div>)}
  </div>)
  }
}

export default Statement;
