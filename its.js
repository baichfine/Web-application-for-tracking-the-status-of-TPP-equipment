import React from 'react';
import update from 'immutability-helper';
import plus from './svg/plus.svg';
import minus from './svg/minus.svg';
import checkMark from './svg/checkMark.svg';
import danger from './svg/danger.svg';
import warning from './svg/warning.svg';
import Ball from './ball.js';

export class Its extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    nameItsArr: ["Функциональный узел","Группа параметров функционального узла","Параметр функционального узла","Фактическое значение параметра","Норма","Показатель","Ф/Н","Критерий балла","Балл","Итс параметра","Итс узла","ИТС"],
    funcNodeArr1: ["Барабан","Каркас, обмуровка котла и газоходы","Пароводяная арматура в пределах котла","Поверхности нагрева котла","Трубопроводы и коллекторы","Обобщенные  узлы"],
    groupParamsArr2: ["Геометрия","Состояние металла","Визуальный контроль каркаса","Результаты измерений геометрии каркаса","Плотность обмуровки и настенных ограждений топки","Плотность обмуровки и настенных ограждений газоходов","Состояние металла (для арматуры Dy > 100)","Состояние металла","Геометрия","Внутренняя загрязненность поверхностей нагрева топки","Состояние металла","Геометрия","Паропроизводительность","Срок службы"],
    paramfuncNodeArr3: ["Утонение (коррозия) по результатам ультразвуковой толщинометрии (УЗТ)","Количество мостиков или отверстий с устраненными трещинами","Количество дефектов, устраненных сваркой за весь период эксплуатации","Местная потеря устойчивости","Нарушения геометрии каркаса котла","Присосы в топку и газовый тракт до выхода из пароперегревателя","Присосы в газовый тракт на участке от входа в экономайзер до выхода из дымососа","Несплошность","Твердость металла","Степень сфероидизации перлита","Продольные борозды (на внутренней поверхности труб)","Обезуглероженный слой (на внутренней поверхности труб)","Язвы (на внутренней поверхности труб)", "Утонение по результатам УЗТ","Увеличение наружного диаметра труб","Общая загрязненность","Несплошность","Дефекты округлой формы (раковины, язвы) на наружной и внутренней поверхностях коллекторов","Дефекты округлой формы (раковины, язвы) на наружной и внутренней поверхностях паропроводов","Микроповрежденность","Утонение по результатам УЗТ в растянутой зоне гибов","Остаточная деформация (для прямых труб)","Остаточная деформация (для прямых участков гнутых труб независимо от марок стали)","Паропроизводительность","Срок службы"],
    factParamArr4:["2","42","0","1","1","5","25","1","180","3","0.16","0","0.7","0.6","1.5","280","1","3","3","2","2.9","1.5","0","420","236296"],
    normParamArr5:["Нет","Нет","Нет","Нет","Нет","5","25","Нет","Нет","Нет","Нет","Нет","Нет","Нет","Нет","400","Нет","Нет","Нет","Нет","Нет","Нет","Нет","420","300000"],
    indexArr6: ["Ф/7","Ф/10","Ф/1","","","Ф/Н","Ф/Н","","Ф/145","Ф/6","Ф/1","Ф/0.2","Ф/0.3","Ф/1","Ф/4","Ф/Н","","","","Ф/4","Ф/20","Ф/1.5","Ф/0.8","Ф/Н","Ф/Н"],
    FNArr7: ["","","","","","","","","","","","","","","","","","","","","","","","",""],
    ballScoreArr8: [
    ["(0 Баллов) 1 < Ф/7", "(1 Балл) 0.714 < Ф/7 ≤ 1","(2 Балла) 0.429 < Ф/7 ≤ 0.714" ,"(3 Балла) 0 < Ф/7 ≤ 0.429", "(4 Балла) Ф = 0"],
    ["(1 Балл) 1 < Ф/10","(2 Балла) 0.3 < Ф/10 ≤ 1" ,"(3 Балла) 0 < Ф/10 ≤ 0.3", "(4 Балла) Ф = 0"],
    ["(1 Балл) 1 < Ф/1","(2 Балла) Ф/1 = 1" ,"(4 Балла) Ф = 0"],
    ["(0 Баллов) Выпучины и впадины в стенке балок, деформация поперечных ребер и полок балок","(4 Балла) Отсутствует"],
    ["(0 Баллов) Наклон колонн, деформации продольных осей балок","(4 Балла) Отсутствует"],
    ["(0 Баллов) 1.3 < Ф/Н", "(1 Балл) 1.2 < Ф/Н ≤ 1.3","(2 Балла) 1.1 < Ф/Н ≤ 1.2" ,"(3 Балла) 1 < Ф/Н ≤ 1.1", "(4 Балла) Ф/Н ≤ 1"],
    ["(0 Баллов) 1.3 < Ф/Н", "(1 Балл) 1.2 < Ф/Н ≤ 1.3","(2 Балла) 1.1 < Ф/Н ≤ 1.2" ,"(3 Балла) 1 < Ф/Н ≤ 1.1", "(4 Балла) Ф/Н ≤ 1"],
    ["(1 Балл) Трещина в основном металле и сварных швах","(4 Балла) Отсутствует"],
    ["(0 Баллов) Ф/145 < 1","(4 Балла) 1 ≤ Ф/145"],
    ["(0 Баллов) 1 < Ф/6","(2 Балла) Ф/6 = 1", "(4 Балла) Ф/6 < 1"],
    ["(0 Баллов) 1 ≤ Ф/1","(4 Балла) Ф/1 < 1"],
    ["(0 Баллов) 1 ≤ Ф/0.2","(4 Балла) Ф/0.2 < 1"],
    ["(0 Баллов) 1 ≤ Ф/0.3","(4 Балла) Ф/0.3 < 1"],
    ["(0 Баллов) 1 < Ф/1", "(1 Балл) 0.6 < Ф/1 ≤ 1","(2 Балла) 0.3 < Ф/1 ≤ 0.6" ,"(3 Балла) 0 < Ф/1 ≤ 0.3", "(4 Балла) Ф = 0"],
    ["(0 Баллов) 1 < Ф/4", "(1 Балл) 0.875 < Ф/4 ≤ 1","(2 Балла) 0.75 < Ф/4 ≤ 0.875" ,"(3 Балла) 0.625 < Ф/4 ≤ 0.75", "(4 Балла) Ф/4 < 0.625"],
    ["(0 Баллов) 1 < Ф/Н", "(1 Балл) 0.75 < Ф/Н ≤ 1","(2 Балла) 0.5 < Ф/Н ≤ 0.75" ,"(3 Балла) 0.25 < Ф/Н ≤ 0.5", "(4 Балла) Ф/Н < 0.25"],
    ["(1 Балл) Трещина в основном металле и сварных швах","(4 Балла) Отсутствует"],
    ["(1 Балл) Более толщины стенки трубы или менее 20 мм","(2 Балла) Равны толщины стенки трубы или менее 20 мм","(3 Балла) Менее толщины стенки трубы или менее 20 мм","(4 Балла) 0"],
    ["(1 Балл) Более 10% толщины стенки или менее 2 мм","(2 Балла) Равны 10% толщины стенки или менее 2 мм","(3 Балла) Менее 10% толщины стенки или менее 2 мм","(4 Балла) 0"],
    ["(0 Баллов) 1 < Ф/4", "(1 Балл) Ф/4 = 1","(2 Балла) Ф/4 = 0.75" ,"(3 Балла) Ф/4 = 0.5", "(4 Балла) Ф/4 = 0.25"],
    ["(0 Баллов) 1 < Ф/20", "(1 Балл) 0.5 < Ф/20 ≤ 1","(2 Балла) 0.25 < Ф/20 ≤ 0.5" ,"(3 Балла) 0 < Ф/20 ≤ 0.25", "(4 Балла) Ф = 0"],
    ["(0 Баллов) 1 < Ф/1.5", "(1 Балл) 0.5 < Ф/1.5 ≤ 1","(2 Балла) 0.167 < Ф/1.5 ≤ 0.5" ,"(3 Балла) 0 < Ф/1.5 ≤ 0.167", "(4 Балла) Ф = 0"],
    ["(0 Баллов) 1 < Ф/0.8", "(1 Балл) 0.5 < Ф/0.8 ≤ 1","(2 Балла) 0.25 < Ф/0.8 ≤ 0.5" ,"(3 Балла) 0 < Ф/0.8 ≤ 0.25", "(4 Балла) Ф = 0"],
    ["(1 Балл) Ф/Н < 0.9","(2 Балла) 0.9 < Ф/Н ≤ 0.925" ,"(3 Балла) 0.925 < Ф/Н ≤ 0.95", "(4 Балла) 0.95 ≤ Ф/Н"],
    ["(0 Баллов) 2 < Ф/Н", "(1 Балл) 1.5 < Ф/Н ≤ 2","(2 Балла) 1 < Ф/Н ≤ 1.5" ,"(3 Балла) 0.5 < Ф/Н ≤ 1", "(4 Балла) Ф/Н ≤ 0.5"]],
    ballArr9: ["","","","","","","","","","","","","","","","","","","","","","","","",""],
    coeffKViArr10: ["0.5","0.5","0.125","0.125","0.375","0.375","1","0.35","0.35","0.3","0.5","0.5","0.5","0.5"],
    itsGroupParamArr11: ["","","","","","","","","","","","","",""],
    itsNodeArr12: ["","","","","",""],
    coeffKyArr13: ["0.318","0.063","0.033","0.134","0.318","0.134"],
    itsArr14: ["","","","","",""],
    signArr: [
    ["<!","<≤","<≤","<≤","="],
    ["<!","<≤","<≤","="],
    ["<!","=","="],
    ["or","or"],
    ["or","or"],
    ["<!","<≤","<≤","<≤","!≤"],
    ["<!","<≤","<≤","<≤","!≤"],
    ["or","or"],
    ["!<","≤!"],
    ["<!","=","!<"],
    ["≤!","!<"],
    ["≤!","!<"],
    ["≤!","!<"],
    ["<!","<≤","<≤","<≤","="],
    ["<!","<≤","<≤","<≤","!<"],
    ["<!","<≤","<≤","<≤","!<"],
    ["or","or"],
    ["or","or","or","or"],
    ["or","or","or","or"],
    ["<!","=","=","=","="],
    ["<!","<≤","<≤","<≤","="],
    ["<!","<≤","<≤","<≤","="],
    ["<!","<≤","<≤","<≤","="],
    ["!<","<≤","<≤","≤!"],
    ["<!","<≤","<≤","<≤","!≤"]],
    numberBallArr: [
    ["1","0.714 1","0.429 0.714","0 0.429","0"],
    ["1","0.3 1","0 0.3","0"],
    ["1","1","0"],
    ["0","1"],
    ["0","1"],
    ["1.3","1.2 1.3","1.1 1.2","1 1.1","1"],
    ["1.3","1.2 1.3","1.1 1.2","1 1.1","1"],
    ["0","1"],
    ["1","1"],
    ["1","1","1"],
    ["1","1"],
    ["1","1"],
    ["1","1"],
    ["1","0.6 1","0.3 0.6","0 0.3","0"],
    ["1","0.875 1","0.75 0.875","0.625 0.75","0.625"],
    ["1","0.75 1","0.5 0.75","0.25 0.5","0.25"],
    ["0","1"],
    ["0","1","2","3"],
    ["0","1","2","3"],
    ["1","1","0.75","0.5","0.25"],
    ["1","0.5 1","0.25 0.5","0 0.25","0"],
    ["1","0.5 1","0.167 0.5","0 0.167","0"],
    ["1","0.5 1","0.25 0.5","0 0.25","0"],
    ["0.9","0.9 0.925","0.925 0.95","0.95"],
    ["2","1.5 2","1 1.5","0.5 1","0.5"]],
    ballArr: [
    ["0","1","2","3","4"],
    ["1","2","3","4"],
    ["1","2","4"],
    ["0","4"],
    ["0","4"],
    ["0","1","2","3","4"],
    ["0","1","2","3","4"],
    ["1","4"],
    ["0","4"],
    ["0","2","4"],
    ["0","4"],
    ["0","4"],
    ["0","4"],
    ["0","1","2","3","4"],
    ["0","1","2","3","4"],
    ["0","1","2","3","4"],
    ["1","4"],
    ["1","2","3","4"],
    ["1","2","3","4"],
    ["0","1","2","3","4"],
    ["0","1","2","3","4"],
    ["0","1","2","3","4"],
    ["0","1","2","3","4"],
    ["1","2","3","4"],
    ["0","1","2","3","4"],],
    selectArr:[["Выпучины и впадины в стенке балок, деформация поперечных ребер и полок балок","Отсутствует"],["Наклон колонн, деформации продольных осей балок","Отсутствует"],["Трещина в основном металле и сварных швах","Отсутствует"],["Трещина в основном металле и сварных швах","Отсутствует"],["Более толщины стенки трубы или менее 20 мм","Равны толщине стенки трубы или менее 20 мм","Менее толщины стенки трубы или менее 20 мм","0"],["Более 10% толщины стенки или менее 2 мм","Равны 10% толщины стенки или менее 2 мм","Менее 10% толщины стенки или менее 2 мм","0"]],
    hintsArr: ["Измеряется в %","Измеряется в шт.","Измеряется в шт.","","","Измеряется в %","Измеряется в %","","Измеряется в НВ","Измеряется в баллах","Измеряется в мм","Измеряется в мм","Измеряется в мм","Измеряется в мм","Измеряется в % от норммального диаметра","Измеряется в г/м\u{00B2}","","Измеряется в мм","Измеряется в мм","Измеряется в баллах","Измеряется в %","Измеряется в %","Измеряется в %","Измеряется в т/ч","Измеряется в часах"],
    monthArr: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь","Год(2020)"],
    ballClickArr: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    idMonthArr: ["clickMonth","","","","","","","","","","","","",],
    clickMonthArr: [true,false,false,false,false,false,false,false,false,false,false,false,false],
    yearArr: ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
    idYearArr: ["","","","","","","","","","","","","colorYear"],
    rowSpan1Arr: ["3","4","2","7","7","2"],
    rowSpan1Arr2: ["3","4","2","7","7","2"],
    rowSpan2Arr: ["2","2","4","2","4","3"],
    stateHideArr: [false,false,false,false,false,false],
    numbersArr1: [0,3,7,9,16,23],
    numbersArr2: [2,6,8,15,22,24],
    numbersArr4: [1,7,9,13,16,20],
    numbersArr5: [2,8,12,14,19,22],
    numbersArr7: [0,3,4,5,6,15,23,24],
    statementBut1: "write1",
    statementBut2: "view1",
    block: "blockStatement",
    column6: true,
    column8: false,
    column11: false,
    column12: false,
    column14: false,
    select: true,
    ballState: "",
    month: "Январь",
    change: false,
  };
  this.min = [4,4,4,4,4,4];
  this.itsNode = [0,0,0,0,0,0];
  this.numbersArr8= [0,0,0,0,0,0];
  this.ballButton = [];
}
//Закрытие окон
closeModalFunc = (e) => {
  this.state.ballClickArr.forEach((obj,i) => {
    this.ballButton[i] = document.querySelectorAll('.ballButton')[i];
  })
  //console.log(this.ballButton);
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
      statementBut2: "view2",
      block: "blockStatement2",
      stateHideArr: [true,true,true,true,true,true],
      rowSpan2Arr: ["1","1","1","1","1","1"],
      rowSpan1Arr: ["1","1","1","1","1","1"],
    }))
  else if (button === "write2")
    this.setState((state, props) => ({
      statementBut1: "write1",
      statementBut2: "view1",
      block: "blockStatement",
      stateHideArr: [false,false,false,false,false,false],
      rowSpan2Arr: ["2","2","4","2","4","3"],
      rowSpan1Arr: ["3","4","2","7","7","2"],
    }))
}
//ИТС таблица
createFirstLineITS = (e) => {
  var table = [];
    table =this.state.nameItsArr.map((obj,i)=> {
        return(<td key={i}><label>{obj}</label></td>)
    });
return table;
}
createTableITS = (e) => {
  var table1 = [], table2 =[], i1 = 0, i2 = 0, j1 = 0, j2 = 0;
    table1 = this.state.paramfuncNodeArr3.map((obj,i)=> {
      if (i === 3 || i === 7 || i === 9 || i === 16 || i === 23) i1++;
      if (i === 1 || i === 7 || i === 9 || i === 13 || i === 16 || i === 20) {if (i !== 1)j1++; j2++;}
      if ((i >= 3 && i <= 6) || i === 15 || i === 23 || i === 24) j2++;
      if (i === 4 || i === 7 || i === 16 || i === 17 || i === 18) i2++;
    table2 = this.state.stateHideArr.map((object,j)=> {
          if (i >= this.state.numbersArr1[j] && i <= this.state.numbersArr2[j] && object === false) return(<tr key={i}>{this.createLineITS(i, i1, i2, j1, j2)}</tr>)
          else if (i === this.state.numbersArr1[j] && object === true) return(<tr key={i}>{this.createLineITS(i, i1, i2, j1, j2)}</tr>)
          else return(null)
      });
      return table2;
    });
  return table1;
}
createLineITS = (i, i1, i2, j1, j2) => {
  var table = [];
    table =this.state.nameItsArr.map((obj,j)=> {
        switch (j) {
        case 0:
          if (i === 0 || i === 3 || i === 7 || i === 9 || i === 16 || i === 23)
            return(<td key={j} rowSpan={this.state.rowSpan1Arr[i1]} className ="funcKnot">{(this.state.stateHideArr[i1] === false)?(<img title="Свернуть группу параметров функционального узла" src={minus} alt="minus" className="hideGroupITS" onClick={(e)=>{this.hideOrRevealFunc(i);}} />):(<img title="Развернуть группу параметров функционального узла" src={plus} alt="plus" className="hideGroupITS" onClick={(e)=>{this.hideOrRevealFunc(i);}} />)}<label>{this.state.funcNodeArr1[i1]}</label></td>)
        else
          return(null)
        case 1:
          if (i === 1 || i === 7 || i === 9 || i === 13 || i === 16 || i === 20)
            return(<td key={j} rowSpan={this.state.rowSpan2Arr[j1]} className ="borderClassName"><label>{this.state.groupParamsArr2[j2]}</label></td>)
          else if (i === 0 || (i >= 3 && i <= 6) || i === 15 || i === 23 || i === 24)
            return(<td key={j} className ="borderClassName"><label>{this.state.groupParamsArr2[j2]}</label></td>)
          else
            return(null)
        case 2:
          return(<td key={j} title={this.state.hintsArr[i]} className ="borderClassName" id="fontSize"><label>{this.state.paramfuncNodeArr3[i]}</label></td>)
        case 3:
          if (i === 3 || i === 4 || i === 7 || i === 16 || i === 17 || i === 18)
            return(<td key={j} className ="borderClassName" id="fontSize">{(this.state.stateHideArr[i1] === true || (this.state.statementBut1 !== "write1" && this.state.change !== true))?(<select disabled = {true} value={parseInt(this.state.factParamArr4[i],10)}>{this.selectParamFunc(i, this.state.selectArr[i2])}</select>):(<select disabled ={false} value={parseInt(this.state.factParamArr4[i],10)} onChange={(e)=>{this.selectFunc(e, i, i2);}}>{this.selectParamFunc(i, this.state.selectArr[i2])}</select>)}</td>)
          else
            return(<td key={j} className ="borderClassName">{(this.state.stateHideArr[i1] === true || (this.state.statementBut1 !== "write1" && this.state.change !== true))?(<label>{this.state.factParamArr4[i]}</label>):(<input type="number" placeholder="Введите значение" value={this.state.factParamArr4[i]} onChange={(e)=>{this.changeValueFactFunc(e, i);}}></input>)}</td>)
        case 4:
          return(<td key={j} className ="borderClassName"><label>{this.state.normParamArr5[i]}</label></td>)
        case 5:
            return(<td key={j} className ="borderClassName"><label id="fontSize">{this.state.indexArr6[i]}</label></td>)
        case 6:
          return(<td key={j} className ="borderClassName"><label id="fontSize">{this.fnFunc(i, this.state.indexArr6[i])}</label></td>)
        case 7:
          return(<td key={j} className ="borderClassName" id="ballScore"><label>{this.ballScoreFunc(this.state.ballScoreArr8[i], i)}</label></td>)
        case 8:
          return(<td key={j} className ="borderClassName"><button title="Нажмите, чтобы узнать подробности." className="ballButton" onClick={(e)=>{this.clickBall(i);}}>{this.ballCalculationFunc(i, this.state.signArr[i])}</button>{this.itsSVGFunc(this.state.ballArr9[i])}{(this.state.ballClickArr[i] === true)?(<Ball paramfuncNodeArr3={this.state.paramfuncNodeArr3[i]}/>):(null)}</td>)
        case 9:
          if (i === 1 || i === 7 || i === 9 || i === 13 || i === 16 || i === 20)
            return(<td key={j} rowSpan={this.state.rowSpan2Arr[j1]} className ="borderClassName"><label>{this.itsGroupParamFunc(i, j1, j2, true)}</label></td>)
          else if (i === 0 || (i >= 3 && i <= 6) || i === 15 || i === 23 || i === 24)
            return(<td key={j} className ="borderClassName"><label>{this.itsGroupParamFunc(i, j1, j2, true)}</label></td>)
          else
            return(this.itsGroupParamFunc(i, j1, j2, false))
        case 10:
          if (i === 0 || i === 3 || i === 7 || i === 9 || i === 16 || i === 23)
            return(<td key={j} rowSpan={this.state.rowSpan1Arr[i1]} className ="borderClassName"><label>{this.itsFuncNodeFunc(i, i1, j1, j2, true)}</label></td>)
          else
            return(this.itsFuncNodeFunc(i, i1, j1, j2, false))
        case 11:
          if (i === 0 || i === 3 || i === 7 || i === 9 || i === 16 || i === 23)
            return(<td key={j} rowSpan={this.state.rowSpan1Arr[i1]} className ="borderClassName"><label id="weightBold">{this.itsFunc(i, i1)}</label></td>)
          else
            return(null)
        default:
          return(null)
    }
  });
return table;
}
//Скрыть/раскрыть блоки таблицы
hideOrRevealFunc = (i) => {
  this.state.numbersArr1.forEach((obj,e)=> {
    if (i === obj && this.state.stateHideArr[e] === false){
      this.rowSpanChangeFunc(i, this.state.stateHideArr[e]);
      this.setState((state, props) => ({
        stateHideArr: update(state.stateHideArr,{[e]:  {$set: true}}),
        rowSpan1Arr: update(state.rowSpan1Arr,{[e]:  {$set: "1"}}),
      }))
    }
    else if (i === obj && this.state.stateHideArr[e] === true){
      this.rowSpanChangeFunc(i, this.state.stateHideArr[e]);
      this.setState((state, props) => ({
        stateHideArr: update(state.stateHideArr,{[e]:  {$set: false}}),
        rowSpan1Arr: update(state.rowSpan1Arr,{[e]:  {$set: state.rowSpan1Arr2[e]}}),
      }))
    }
  });
}
rowSpanChangeFunc = (i, rowSpan) => {
  if (rowSpan === false) this.array = ["1","1","1","1","1","1"];
  else this.array = ["2","2","4","2","4","3"];
  if (i === 0) this.rowSpanFunc(0,this.array);
  else if (i === 7) this.rowSpanFunc(1,this.array);
  else if (i === 9) {
    this.rowSpanFunc(2,this.array);
    this.rowSpanFunc(3,this.array);
  }
  else if (i === 16) {
   this.rowSpanFunc(4,this.array);
   this.rowSpanFunc(5,this.array);
  }
}
rowSpanFunc = (i, arr) => {
  this.setState((state, props) => ({
    rowSpan2Arr: update(state.rowSpan2Arr,{[i]:  {$set: arr[i]}}),
  }))
}
//Изменение фактического параметра
changeValueFactFunc = (e, i) => {
  this.min = [4,4,4,4,4,4];
  this.itsNode = [0,0,0,0,0,0];
  var value = e.target.value;
  this.setState((state, props) => ({
    factParamArr4: update(state.factParamArr4,{[i]:  {$set: value}}),
    column6: true,
  }))
}
//Выбор из списка фактического параметра
selectParamFunc = (i,arr) => {
  var table = [];
    table = arr.map((obj,j)=> {
      if (this.state.select === true && parseInt(this.state.factParamArr4[i],10) === j){
        this.setState((state, props) => ({
          indexArr6: update(state.indexArr6,{[i]:  {$set: arr[state.factParamArr4[i]]}}),
          FNArr7: update(state.FNArr7,{[i]:  {$set: arr[state.factParamArr4[i]]}}),
          ballArr9: update(state.ballArr9,{[i]:  {$set: state.ballArr[i][state.factParamArr4[i]]}}),
          select: false
        }))
      }
        return(<option key={j} background = "red" value={j}>{obj}</option>)
    });
return table;;
}
selectFunc = (e, i, i2) => {
  this.min = [4,4,4,4,4,4];
  this.itsNode = [0,0,0,0,0,0];
  var value = e.target.value;
  this.setState((state, props) => ({
    factParamArr4: update(state.factParamArr4,{[i]:  {$set: value}}),
    indexArr6: update(state.indexArr6,{[i]:  {$set: state.selectArr[i2][value]}}),
    FNArr7: update(state.FNArr7,{[i]:  {$set: state.selectArr[i2][value]}}),
  }))
  this.state.signArr[i].forEach((obj,j)=> {
    if (obj === "or" && value === this.state.numberBallArr[i][j]){
      this.setState((state, props) => ({
        ballArr9: update(state.ballArr9,{[i]:  {$set: state.ballArr[i][j]}}),
        column8: true,
      }))
    }
  });
}
//Расчёт показателя Ф/Н
fnFunc = (i, index) => {
  if (this.state.column6 === true){
    if (this.state.factParamArr4[i] !== ""){
      var a = index.split('/')[1];
      if (a === "Н") {
        this.setState((state, props) => ({
          FNArr7: update(state.FNArr7,{[i]:  {$set: this.decimalAdjust("round",parseFloat(state.factParamArr4[i])/parseFloat(state.normParamArr5[i]),-2)}}),
          column6: false,
          column8: true
        }))
      }
      else if (typeof(parseFloat(a)) === "number" && isNaN(parseFloat(a)) === false){
        this.setState((state, props) => ({
          FNArr7: update(state.FNArr7,{[i]:  {$set: this.decimalAdjust("round", parseFloat(state.factParamArr4[i])/parseFloat(a),-2)}}),
          column6: false,
          column8: true
        }))
      }
    }
    else
      this.setState((state, props) => ({
        FNArr7: update(state.FNArr7,{[i]:  {$set: ""}}),
        column6: false,
        column8: true
      }))
    }
    return (this.state.FNArr7[i]);
}
//Вывод критериев баллов
ballScoreFunc = (arr, j) => {
  var table = [], a;
    table =arr.map((obj,i)=> {
        a = obj.split(' ')[0];
        a = a.split('(')[1];
        if (this.state.ballArr9[j] === a) return(<p key={i} className="itsBallChoice">{obj}</p>)
        else return(<p key={i} className="itsBall">{obj}</p>)
    });
  return table;
}
//Расчёт балла параметра
ballCalculationFunc = (i, arr) => {
  if (this.state.column8 === true){
    if (this.state.factParamArr4[i] !== ""){
      var a, b;
        arr.forEach((obj,j)=> {
            if (obj === "!<" && parseFloat(this.state.FNArr7[i]) < parseFloat(this.state.numberBallArr[i][j]))
                this.ballStateFunc(i,this.state.ballArr[i][j]);
            else if (obj === "<!" && parseFloat(this.state.numberBallArr[i][j]) < parseFloat(this.state.FNArr7[i]))
                this.ballStateFunc(i,this.state.ballArr[i][j]);
            else if (obj === "!≤" && parseFloat(this.state.FNArr7[i]) <= parseFloat(this.state.numberBallArr[i][j]))
                this.ballStateFunc(i,this.state.ballArr[i][j]);
            else if (obj === "≤!" && parseFloat(this.state.numberBallArr[i][j]) <= parseFloat(this.state.FNArr7[i]))
                this.ballStateFunc(i,this.state.ballArr[i][j]);
            else if (obj === "<≤") {
                a = this.state.numberBallArr[i][j].split(' ')[0];
                b = this.state.numberBallArr[i][j].split(' ')[1];
                if (parseFloat(a) < parseFloat(this.state.FNArr7[i]) && parseFloat(this.state.FNArr7[i]) <= parseFloat(b))
                    this.ballStateFunc(i,this.state.ballArr[i][j]);
                  }
            else if (obj === "=" && parseFloat(this.state.FNArr7[i]) === parseFloat(this.state.numberBallArr[i][j]))
                this.ballStateFunc(i,this.state.ballArr[i][j]);
        });
    }
    else this.ballStateFunc(i,"");
  }
  return this.state.ballArr9[i];
}
ballStateFunc = (i, arr) => {
  this.setState((state, props) => ({
    ballArr9: update(state.ballArr9,{[i]:  {$set: arr}}),
    column8: false,
    column11: true
  }))
}
itsSVGFunc = (ball) => {
  if (ball === "0" || ball === "1") {
    return(<img title="Фактический параметр располагается вне зоны предельно-допустимых значений." src={danger} alt="danger" className="itsSVG"/>)
  }
  else if (ball === "2" || ball === "3") {
    return(<img title="Фактический параметр располагается в зоне предельно-допустимых значений, но есть вероятность отказа оборудования." src={warning} alt="warning" className="itsSVG"/>)
  }
  else if (ball === "4"){
    return(<img title="У фактического параметра нет отклонения от нормы." src={checkMark} alt="checkMark" className="itsSVG"/>)
  }
  else {
    return(null)
  }
}
//Расчёт ИТС параметра узла
itsGroupParamFunc = (i, n, j, bool) => {
  if (this.state.column11 === true){
  if (i >= this.state.numbersArr4[n] && i <= this.state.numbersArr5[n]){
    if (parseFloat(this.state.ballArr9[i]) <= this.min[n]) {
      this.min[n] = this.state.ballArr9[i];
      this.numbersArr8[n] = i;
      this.itsGroupParamStateFunc(this.state.numbersArr4[n],(this.state.coeffKViArr10[j] * this.min[n]/4), n, j);
    }
  }
  else this.itsGroupParamStateFunc(i,(this.state.coeffKViArr10[j] * this.state.ballArr9[i]/4), n, j);
  }
  if (bool === true) return(this.state.itsGroupParamArr11[j]);
}
itsGroupParamStateFunc = (i, arr, n, j) => {
  if (this.state.factParamArr4[i] !== "") {
  this.setState((state, props) => ({
    itsGroupParamArr11: update(state.itsGroupParamArr11,{[j]:  {$set: this.decimalAdjust("round", arr,-3)}}),
    column11: false,
    column12: true,
  }))
}
else
  this.setState((state, props) => ({
    itsGroupParamArr11: update(state.itsGroupParamArr11,{[j]:  {$set: ""}}),
    column11: false,
    column12: true,
}))
}
//Расчёт ИТС функционального узла
itsFuncNodeFunc = (i, i1, j1, j2, bool) => {
  if (this.state.column12 === true && this.state.stateHideArr[i1] === false){
    this.state.numbersArr7.concat(this.numbersArr8).forEach((obj,e) => {
      if (i === obj) this.itsNode[i1] = parseFloat(this.itsNode[i1]) + this.state.itsGroupParamArr11[j2];
     })
     if (this.state.itsGroupParamArr11[j2] !== "")
       this.setState((state, props) => ({
         itsNodeArr12: update(state.itsNodeArr12,{[i1]:  {$set: this.decimalAdjust("round",(parseFloat(this.itsNode[i1])*100),-2)}}),
         column12: false,
         column14: true
       }))
    else
      this.setState((state, props) => ({
        itsNodeArr12: update(state.itsNodeArr12,{[i1]:  {$set: ""}}),
        column12: false,
        column14: true
      }))
  }
  if (bool === true) return(this.state.itsNodeArr12[i1]);
}
//Расчёт ИТС Функционального узла с коэфф КУ
itsFunc = (i, i1) => {
  if (this.state.column14 === true && this.state.stateHideArr[i1] === false){
    if (this.state.itsNodeArr12[i1] !== "")
      this.setState((state, props) => ({
        itsArr14: update(state.itsArr14,{[i1]:  {$set: this.decimalAdjust("round",(state.itsNodeArr12[i1]*state.coeffKyArr13[i1]),-3)}}),
        column14: false
      }))
   else
     this.setState((state, props) => ({
       itsArr14: update(state.itsArr14,{[i1]:  {$set: ""}}),
       column14: false
     }))
  }
   return(this.state.itsArr14[i1]);
}
//Расчёт конечного ИТС оборудования
itsCalculation = (e) => {
  var its = 0;
  this.state.itsArr14.forEach((obj,e) => {
    its = its + obj;
  });
  if (isNaN(its) === false) return (this.decimalAdjust("round",its,-2));
  return (null)
}
//Модальное окно баллах
clickBall = (i) => {
  this.setState((state, props) => ({
      ballClickArr: update(state.ballClickArr,{[i]:  {$set: !state.ballClickArr[i]}}),
      ballState: i
  }))
}
//Округление десятичных дробей
decimalAdjust =(type, value, exp) => {
   value = +value;
   exp = +exp;
   // Сдвиг разрядов
   value = value.toString().split('e');
   value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
   // Обратный сдвиг
   value = value.toString().split('e');
   return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
 }
//Просмотр ИТС Месяцы
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
        month: state.monthArr[i],
        stateHideArr: [true,true,true,true,true,true],
        rowSpan2Arr: ["1","1","1","1","1","1"],
        rowSpan1Arr: ["1","1","1","1","1","1"],
        change: false
      }))
    else
      this.setState((state, props) => ({
        clickMonthArr: update(state.clickMonthArr,{[e]:  {$set: false}}),
        idMonthArr: update(state.idMonthArr,{[e]:  {$set: ""}}),
      }))
  });
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
changeFunc = (e) => {
  this.setState({
    change: !this.state.change
  })
}
// Просмотр ИТС год
createTableITSMonth = (e) => {
  var table = [], arr = this.state.monthArr;
    table =arr.map((obj,i)=> {
      if (i === 0) return (<td id="weightBold" colSpan="2" key={i}>Функциональный узел</td>)
      else return (<td className="colorOrange" id="weightBold" key={i}>{arr[i-1]}</td>)
    });
return table;
}
createTableITSYear = (e) => {
  var arr = this.state.funcNodeArr1, table = [], j = 0;
    table =arr.concat(arr).map((obj,i)=> {
      if (i % 2 === 0){
        if (i !== 0) j++;
        return(<tr className="lineTab" id ="tabGray" key={i}>{this.createLineTableITSYear(j, true)}</tr>)
      }
      else return(<tr className="lineTab" key={i}>{this.createLineTableITSYear(Math.floor(i/2), false)}</tr>)
});
return table;
}
createLineTableITSYear = (j, boolen) => {
  var table = [];
    table =this.state.groupParamsArr2.map((obj,i)=> {
      if (boolen === true){
          if (i === 0) return (<td className="leftTextTab" id="leftTextTab2" rowSpan="2" key={i}><label>{this.state.funcNodeArr1[j]}</label></td>)
          else if (i === 1) return (<td key={i}>ИТС узла:</td>)
          else return (<td id="borderLeftTabYear2" key={i}>{this.state.itsNodeArr12[j]}</td>)
      }
      else {
          if (i === 0) return (null)
          else if (i === 1) return (<td key={i}>ИТС:</td>)
          else return (<td id="borderLeftTabYear2" key={i}><label>{this.state.itsArr14[j]}</label></td>)
      }
    });
return table;
}
createLastLineTableITSYear = (e) => {
  var table = [], arr = this.state.monthArr;
    table =arr.map((obj,i)=> {
      if (i === 0) return (<td id="weightBold" colSpan="2" key={i}>Индекс технического состояния:</td>)
      else return (<td className="colorOrange" id="borderLeftTabYear" key={i}>{this.itsCalculation()}</td>)
    });
return table;
}

//Закрытие окон
componentWillUnmount() {
   document.removeEventListener('click', this.handleClickOutside, false);
 }
UNSAFE_componentWillMount() {
   document.addEventListener('click', this.handleClickOutside, false);
 }
handleClickOutside = (e) => {
  const yearModal = document.querySelector('.yearModal');
  const year = document.querySelector('.labelYear');
  /*const ballModal = document.querySelector('.ballModal');
   this.state.ballClickArr.forEach((obj,i) => {
     if (!e.path.includes(this.ballButton[i]) && !e.path.includes(ballModal))
       this.setState((state, props) => ({
         ballClickArr: update(state.ballClickArr,{[i]:  {$set: false}}),
       }))
   })*/
   if (yearModal !== null &&  year !== null) {
   if (this.state.statementBut1 !== "write1" && !e.path.includes(yearModal) && !e.path.includes(year))
   this.setState({
     choiceYear: false,
     idYear: ""
   })}
 }

render(){
    return(<div className="statement">
            {(typeof(this.ballButton[0]) === "undefined")?(this.closeModalFunc()):(null)}
            <div className="buttons">
              <button className={this.state.statementBut1} onClick={(e)=>{this.clickStatementButtonFunc(this.state.statementBut1);}}>Расчёт ИТС</button><button className ={this.state.statementBut2} onClick={(e)=>{this.clickStatementButtonFunc(this.state.statementBut2);}}>Просмотр ИТС</button>
            </div>
            {(this.state.statementBut1 !== "write1")?(<div className ="buttonsMonthAndYear">
            <table className="tabMonthAndYear"><tbody><tr>
              {this.createButtonsMonthAndYearFunc()}
              <td><label className="labelYear" id={this.state.idYear} onClick={(e)=>{this.choiceYearFunc(e);}}>Выбрать год</label></td>
              </tr></tbody></table>
              {(this.state.choiceYear === true)?(<div className="yearModal">
              <table><tbody>
              {this.showYearModalFunc()}
              </tbody></table>
              </div>):(null)}
            </div>):(null)}
           <div className={this.state.block}>
           {(this.state.clickMonthArr[12] === true && this.state.statementBut1 !== "write1")?(<div className="blockStatement2">
           <div className = "statementTab" id = "statementTabYear">
             <table><tbody>
               <tr>{this.createTableITSMonth()}</tr>
               {this.createTableITSYear()}
               <tr id="lineTabLast">{this.createLastLineTableITSYear()}</tr>
             </tbody></table>
           </div>
           </div>):(<div className="its">
             <div className="headerItsTable"></div>
             <div className="itsTable">
               <table><tbody>
                 <tr id="sticky">{this.createFirstLineITS()}</tr>
                 {this.createTableITS()}
               </tbody></table>
             </div>
             <div className="footerItsTable"></div>
             <div className="totalIts">
             <table className="itsButtom"><tbody>
               <tr><td className="colorOrange" id="weightBold">Текущий месяц:</td><td>{(this.state.statementBut1 !== "write1" && this.state.change !== true)?(this.state.month):(this.seeMonthFunc())}</td>
               <td className="colorOrange" id="weightBold">Дата ввода информации:</td>
               <td>{(this.state.statementBut1 !== "write1" && this.state.change !== true)?(<label>Дата 1</label>):(<input type="date" name="calendar" value={this.seeDateFunc()}></input>)}</td>
               <td className="colorOrange" id="weightBold">Ответственное лицо:</td>
               <td>Администратор</td>
               <td className="colorOrange" id="weightBold">Всего ИТС:</td>
               <td>{this.itsCalculation()}</td>
               <td>{(this.state.statementBut1 !== "write1")?((this.state.change === true)?(<button onClick={(e)=>{this.changeFunc(e);}}>Сохранить</button>):(<button onClick={(e)=>{this.changeFunc(e);}}>Редактировать</button>)):(<button>Отправить на согласование</button>)}</td></tr>
               </tbody></table>
             </div>
             </div>)}
            </div>
      </div>)
  }
}

export default Its;
