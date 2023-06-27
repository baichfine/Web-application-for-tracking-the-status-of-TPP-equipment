import React from 'react';
import update from 'immutability-helper';
import checkMark from './svg/checkMark.svg';
import danger from './svg/danger.svg';

export class MonthStatement extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    nameParamsArr: ["Паропроизводительность", "Температура питательной воды","Присосы воздуха в топку","Присосы воздуха в газовый тракт","КПД котла \"брутто\"", "Уд. расход эл/эн. на тягу и дутье","Сопротивление газового тракта","Скорость ДВ/ДС","Коэффициент избытка воздуха","Температура уходящих газов","Содержание в дым. газах NOx"],
    hintsArr: ["Измеряется в т/ч", "Измеряется в \u{2103}","Измеряется в %","Измеряется в %","Измеряется в %","Измеряется в кВт.ч/Гкал","Измеряется в мм.в.ст.","","","Измеряется в \u{2103}","Измеряется в мг/нм\u{00B3}"],
    classNameTabArr:["leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab","leftTextTab"],
    normValueTabArr: ["0","1","2","3","4","5","6","7","8","9","10"],
    valueTabArr: ["0","2","2","3.5","5","4.5","7","7","8","8.9","2110.5"],
    dateRepairsArr: ["Дата последнего капитального ремонта","Дата последнего текущего ремонта","Дата следующего капитального ремонта","Дата следующего текущего ремонта"],
    monthArr: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь","Год"],
    selectedFuelArr: [true,false,true,false,false,true,false,true,false,true,false,true],
    statementBut1: "write1",
    statementBut2: "view1",
    selectedFuel: true,
    colorP1: "",
    colorP2: "",
    lastLineColor: "leftTextTab",
    changeStatement: false,
    array2:["",""]

  };
}
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
      else return(<tr className="lineTab" key={i}><td className="rightTextTab" title = "Фактическое значение параметра">Факт:</td><td>{(this.state.changeStatement === true)?(<input  onClick={(e)=>{this.classNameTabFunc(Math.floor(i/2));}} type="number" placeholder = "Введите значение" value={this.state.valueTabArr[Math.floor(i/2)]} onChange={(e)=>{this.changeValueTabFunc(e, Math.floor(i/2));}}></input>):(this.state.valueTabArr[Math.floor(i/2)])}</td></tr>)
});
return table;
}
radioButtonFuelFunc = (e) => {
  if (this.state.changeStatement === true){this.classNameTabFunc(11);
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
        return((this.state.changeStatement === true)?(<div key={i}>
          <p>Причина отклонения <span id="weightBold" className="colorOrange">{this.state.nameParamsArr[i]}</span></p><textarea name="text"></textarea>
          <p>Мероприятия по устарнению замечаний <span id="weightBold" className="colorOrange">{this.state.nameParamsArr[i]}</span></p><textarea name="text"></textarea>
          <p>Плановая дата устранения: <input type="date" name="calendar"></input></p>
        </div>):(<div key={i}>
          <p>Причина отклонения <span id="weightBold" className="colorOrange">{this.state.nameParamsArr[i]}</span></p><textarea name="text" disabled></textarea>
          <p>Мероприятия по устарнению замечаний <span id="weightBold" className="colorOrange">{this.state.nameParamsArr[i]}</span></p><textarea name="text" disabled></textarea>
          <p>Плановая дата устранения: Дата {i+1}</p>
        </div>))
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
      else return((this.state.changeStatement === true)?(<tr key={i}><td><input type="date" name="calendar"></input></td><td><input type="date" name="calendar"></input></td><td><input type="text" placeholder="Название организации"></input></td></tr>):(<tr key={i}><td>Дата {Math.floor(i/2)+1}</td><td>Дата {Math.floor(i/2)+1}</td><td>Организация {Math.floor(i/2)+1}</td></tr>))
    });
return table;
}
changeFunc = (e) => {
  this.classNameTabFunc(11);
  this.setState({
    changeStatement: !this.state.changeStatement,
    lastLineColor: "leftTextTab"
  })
}
//Таблица годовая
createTableMonth = (e) => {
  var table = [], arr = this.state.monthArr;
    table =arr.map((obj,i)=> {
      if (i === 0) return (<td id="weightBold" colSpan="2" key={i}>Параметр технического состояния</td>)
      else return (<td className="colorOrange" id="weightBold" colSpan="2" key={i}>{arr[i-1]}</td>)
    });
return table;
}
createTableStatementYear = (e) => {
  var arr = this.state.nameParamsArr, table = [], j = 0;
    table =arr.concat(arr).map((obj,i)=> {
      if (i % 2 === 0){
        if (i !== 0) j++;
        return(<tr className="lineTab" id ="tabGray" key={i}>{this.createLineTableStatementYear(j, true)}</tr>)
      }
      else return(<tr className="lineTab" key={i}>{this.createLineTableStatementYear(Math.floor(i/2))}</tr>)
});
return table;
}
createLineTableStatementYear = (j, boolen) => {
  var table = [], arr = this.state.monthArr;
    table =arr.concat("").map((obj,i)=> {
      if (boolen === true){
          if (i === 0) return (<td className="leftTextTab" id="leftTextTab2" rowSpan="2" title={this.state.hintsArr[j]} key={i}><label>{this.state.nameParamsArr[j]}</label></td>)
          else if (i === 1) return (<td id="noLine" className="rightTextTab" title = "Нормальное значение параметра" key={i}>Норма:</td>)
          else return (this.createParamsValue(j))
      }
      else {
          if (i === 0) return (null)
          else if (i === 1) return (<td className="rightTextTab" title = "Фактическое значение параметра" key={i}>Факт:</td>)
          else return (<td id="borderLeftTabYear" key={i}><label>{this.state.valueTabArr[j]}</label></td>)
      }
    });
return table;
}
createParamsValue = (j) => {
  var table = [], arr = this.state.array2;
    table =arr.map((obj,i)=> {
      if (i === 0) return (<td id="borderLeftTabYear" key={i}><label>{this.state.normValueTabArr[j]}</label></td>)
      else return (<td rowSpan="2" id="borderRightTabYear" key={i}>{(parseFloat(this.state.valueTabArr[j]) > parseFloat(this.state.normValueTabArr[j]))?(<img title="Значение параметра не соответствует норме." src={danger} alt="danger" id="svgTabYear"/>):((parseFloat(this.state.valueTabArr[j]) <= parseFloat(this.state.normValueTabArr[j]))?(<img title="Значение параметра соответствует норме." src={checkMark} alt="checkMark" id="svgTabYear"/>):(null))}</td>)
    });
return table;
}
createTableFuel = (e) => {
  var table = [], arr = this.state.monthArr;
    table =arr.map((obj,i)=> {
      if (i === 0) return (<td colSpan="2" className ={this.state.lastLineColor} key={i}> Топливо (газ, мазут)</td>)
      else return (<td id="borderLeftTabYear" colSpan="2" key={i}><p className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedFuelArr[i-1] === true}/><span className="label"></span>Газ</label></p>
      <p className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedFuelArr[i-1] === false}/><span className="label"></span>Мазут</label></p></td>)
    });
return table;
}


render(){
  if (this.props.year !== 12) return(
  <div className="blockStatement2">
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
      <table className="matchingTab">
      {(this.state.changeStatement === true)?(<tbody>
        <tr><td className="colorOrange" id="weightBold">Месяц:</td><td>{this.props.month}</td></tr>
        <tr><td className="colorOrange" id="weightBold">Дата ввода информации:</td><td><input type="date" name="calendar" value={this.seeDateFunc()}></input></td></tr>
        <tr><td className="colorOrange" id="weightBold">Ответственное лицо:</td><td></td></tr>
        <tr><td colSpan="2"><button onClick={(e)=>{this.changeFunc();}}>Сохранить изменения</button></td></tr>
        </tbody>):(<tbody><tr><td className="colorOrange" id="weightBold">Месяц:</td><td>{this.props.month}</td></tr>
      <tr><td className="colorOrange" id="weightBold">Дата ввода информации:</td><td>Дата 1</td></tr>
      <tr><td className="colorOrange" id="weightBold">Ответственное лицо:</td><td>Администратор</td></tr>
      <tr><td colSpan="2"><button onClick={(e)=>{this.changeFunc();}}>Редактировать</button></td></tr></tbody>)}
        </table>
    </div>
    </div>
  </div>)
  else return (
  <div className="blockStatement2">
    <div className = "statementTab" id = "statementTabYear">
      <table><tbody>
        <tr>{this.createTableMonth()}</tr>
        {this.createTableStatementYear()}
        <tr id="lineTabLast">{this.createTableFuel()}</tr>
      </tbody></table>
    </div>
  </div>)

  }
}

export default MonthStatement;
