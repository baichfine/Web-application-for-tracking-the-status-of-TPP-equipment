import React from 'react';
import update from 'immutability-helper';

export class Failures extends React.Component{
constructor(props) {
  super(props);
  this.state = {
      surfaceArr: ["Водяной экономайзер","Экраны","Подвесная система КПП","Настенный ПП","Потолочный ПП","Ширмовый ПП","Конвективный ПП"],
      dateChangeArr:["1999","-","-","-","2001","2010","1988"],
      runningHoursArr: ["61544","155367","155367","155367","155367","155367","93206"],
      dateFailuresArr: [
      ["27.02.2017","26.07.2017","04.02.2018"],
      ["29.05.2011","16.09.2012"],
      ["07.03.2003","26.07.2010","28.01.2017","04.07.2019"],
      ["","",""],
      ["28.01.2003","06.07.2010","03.04.2015"],
      ["","",""],
      ["01.06.2009","20.08.2014","08.02.2016"]],
      referenceFailuresArr: [["Справка по останову котла ст. № 9 КТЭЦ-1 27 февраля 2017 года в работе находились котлы ст. \n№9,10 и турбогенераторы ст. № 5,7 и ГТУ ст. №1. \n22 февраля на котле появилась неисправность «короткое замыкание в схеме отсекателя мазута».\n25 февраля при опробовании защит котла перед пуском ни каких замечаний не обнаружено и котел ТГМ-84 «Б» ст. №9 был включен в работу в 1ч. 40 мин. Во время работы котла данный дефект опять появился. \n27 февраля цех АСУТП приступил к устранению дефекта. При выполнении действий по опробованию ключа управления мазутным отсекателем старший машинист вместо него ошибочно повернул ключ управления газовым отсекалем, вследствие чего в 11ч 48мин аварийно отключился котел ст. №9. Причиной останова котла ст. №9 явились ошибочные действия персонала. В 13ч 15мин котел ст.№9 был включен в работу.","","",],["",""],["","","",""],["","",""],["","",""],["","",""],["","",""]],
      dateFailuresChoiceArr: [true,false,false,false,false,false,false],
      line: true,
      choiceReference: 0,
      change: true
  };
}

createTableFailures = (e) => {
  var table = [];
    table =this.state.surfaceArr.map((obj,i)=> {
      return(<tr key={i} onClick={(e)=>{this.choiceFailureFunc(i);}}>
        {(this.state.dateFailuresChoiceArr[i] === true)?(<td id="leftTextTab2"><label className="hoverFailures">{this.state.surfaceArr[i]}</label></td>):(<td id="leftTextTab2"><label>{this.state.surfaceArr[i]}</label></td>)}
        <td>{(this.state.change === true)?(<input type="number" placeholder="Введите значение" value={this.state.dateChangeArr[i]} onChange={(e)=>{this.changeValueFunc(e, i, 1);}}></input>):(<label>{this.state.dateChangeArr[i]}</label>)}</td>
        <td>{(this.state.change === true)?(<input type="number" placeholder="Введите значение" value={this.state.runningHoursArr[i]} onChange={(e)=>{this.changeValueFunc(e, i, 2);}}></input>):(<label>{this.state.runningHoursArr[i]}</label>)}</td>
        <td>{(this.state.change === true)?(<input placeholder="Введите значение" value={this.state.dateFailuresArr[i][0]} onChange={(e)=>{this.changeValueFunc(e, i, 3);}}></input>):(<label>{this.state.dateFailuresArr[i][0]}</label>)}</td></tr>)
    });
  return table;
}
changeValueFunc = (e, i, j) => {
  var value = e.target.value;
  if (j === 1)
    this.setState((state, props) => ({
      dateChangeArr: update(state.dateChangeArr,{[i]:  {$set: value}}),
    }))
  else if (j === 2)
    this.setState((state, props) => ({
      runningHoursArr: update(state.runningHoursArr,{[i]:  {$set: value}}),
    }))
  else if (j === 3){
    this.setState((state, props) => ({
      dateFailuresArr: update(state.dateFailuresArr, {[i]: {0: {$set: value}}})
    }))
}
}
choiceParamFunc = (e) => {
  var j=0;
  this.state.dateFailuresChoiceArr.forEach((obj,i)=> {
      if (obj === true) j = i;
    })
  return(this.state.surfaceArr[j])
}
createTableChoiceDateFailures = (e) => {
  var table1 = [], table2 =[];
    table1 =this.state.dateFailuresChoiceArr.map((obj1,i)=> {
      if (obj1 === true) {
        table2 =Object.values(this.state.dateFailuresArr[i]).map((obj2,j)=> {
          if (this.state.choiceReference === j) return(<tr><td><label className="hoverFailures" onClick={(e)=>{this.referenceChoiceFunc(j);}}>{obj2}</label></td></tr>)
          else return(<tr><td><label id="hoverFailures" onClick={(e)=>{this.referenceChoiceFunc(j);}}>{obj2}</label></td></tr>)
          })
        return table2;
      }
      return (null)
    })
  return table1;
}
lineFunc = (e) => {
  var j=0;
  this.state.dateFailuresChoiceArr.forEach((obj,i)=> {
      if (obj === true) j = i;
    })
    if (this.state.dateFailuresArr[j].length === 3)
  return(<tr><td></td></tr>)
}
choiceFailureFunc = (i) => {
  this.state.dateFailuresChoiceArr.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        dateFailuresChoiceArr: update(state.dateFailuresChoiceArr,{[i]:  {$set: true}}),
        choiceReference: 0
      }))
    else
      this.setState((state, props) => ({
        dateFailuresChoiceArr: update(state.dateFailuresChoiceArr,{[e]:  {$set: false}}),
      }))
  });
}
referenceChoiceFunc = (i) => {
  this.setState({
    choiceReference: i,
  })
}
createTableReferenceFailures = (e) => {
  var table1 = [], table2 =[];
    table1 =this.state.dateFailuresChoiceArr.map((obj1,i)=> {
      if (obj1 === true) {
        table2 =this.state.referenceFailuresArr[i].map((obj2,j)=> {
            if (this.state.choiceReference === j) return(<div>
              <p><label>Опишите причину отключения: </label><label className="hoverFailures">{this.state.surfaceArr[i]}</label></p>
              <p><label>Дата аварийного отключения: </label><label className="hoverFailures">{this.state.dateFailuresArr[i][j]}</label></p>
              <textarea value={obj2}></textarea></div>)
            else return(null)
          })
        return table2;
      }
      return (null)
    })
  return table1;
}

render(){
    return(<div className="statement">
        <div className="blockStatement">
          <div className = "failures">
              <div className = "failuresTab">
                <table><tbody>
                  <tr id="colorLine"><td id="borderLine"><label>Поверхность</label></td>
                  <td id="borderLine"><label>Дата замены, год</label></td>
                  <td id="borderLine"><label>Наработка</label></td><td><label>Дата отказа</label></td>
                  </tr>
                  {this.createTableFailures()}
                </tbody></table>
              </div>
              <div className ="failuresAll">
                <div className="headerfailuresDateTab"></div>
                <div className="failuresDateTab">
                  <table><tbody>
                    <tr className="white"><td><label>Дата аварийного отключения</label>
                    <p id="weightBold"><label>{this.choiceParamFunc()}</label></p></td></tr>
                    {this.createTableChoiceDateFailures()}
                  </tbody></table>
                </div>
                <div className="footerfailuresDateTab"></div>
              </div>
              <div className ="failuresButton">
                <button>Добавить новую дату</button>
                <button>Редактировать</button>
                <button>Удалить</button>
              </div>
          </div>
          <div className="allFailuresTab">
            <div className="failuresReferenceTab">
              {this.createTableReferenceFailures()}
            </div>
            <div className="failuresButtonTab">
            <label className="colorOrange" id="weightBold">Ответственное лицо:</label><label>Администратор</label><button>Сохранить</button>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default Failures;
