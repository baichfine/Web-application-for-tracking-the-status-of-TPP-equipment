# Web-application-for-tracking-the-status-of-TPP-equipment
Web-application React.js. The module of the software application for tracking the technical condition of the main equipment of the thermal power plant


Главный файл приложения index.js, в этом файле создается основной родительский компонент «App». В этот компонент импортируются все дочерние компоненты, библиотеки и файлы стилизации:
- import React from 'react'; - импортирование библиотеки React.js;
- import ReactDOM from 'react-dom'; - импортирование библиотеки Virtual DOM React;
- import { BrowserRouter } from 'react-router-dom'; - импортирование библиотеки навигации в DOM-дереве;
- import './css/index.css'; - импортирование файла стилизации CSS;
- import Authorization from './authorization.js'; - импортирование дочернего компонента Авторизация;
- import Administrator from './administrator.js'; - импортирование дочернего компонента Личный кабинет Администратора;
- import Manager from './manager.js'; - импортирование дочернего компонента Личный кабинет Управляющего;
- import Curator from './curator.js'; - импортирование дочернего компонента Личный кабинет Куратора;
- import BranchSpecialist from './branchSpecialist.js'; - импортирование дочернего компонента Личный кабинет Специалиста филиала.
Отобразить HTML страницы позволяет метод render(). HTML код, который находится внутри метода render(). Он динамически компилируется, изменяясь каждый раз, когда происходит редактирование Virtual DOM, таким образом позволяя мгновенно обновлять элементы HTML страницы. 
Работа React приложения строится на изменении состояний, которые влияют на элементы Virtual DOM. При инициализации компонента в методе constructor(props) объявляют начальные состояния, которые, по мере работы приложения, будут динамически изменяться. Состояние выглядит следующим образом: «this.state.authorization», где ключевое слово «state» обозначает состояние в данном компоненте. Также, бывает состояние родительского компонента, которое обозначается ключевым словом «props». А слово «authorization» является названием состояния [17].
Для обновления состояния используется следующая конструкция:
this.setState ({authorization: «новое значение»})
Во время обновления состояния происходит повторный запуск метода render(), после чего страница приложения динамически обновляется. Родительский компонент «App» включает в себя следующий программный код метода render():
render(){
if (this.state.authorizated === false) return(<Authorization authorization={this.authorization}/>)
else if (this.state.authorizated === true && this.state.user === "administrator") return(<Administrator authorization={this.authorization}/>)
else if (this.state.authorizated === true && this.state.user === "manager") return(<Manager/>)
else if (this.state.authorizated === true && this.state.user === "curator") return(<Curator/>)
else return(<BranchSpecialist/>)
}
Начальное состояние авторизации пользователя имеет значение «false», что означат следующее: пользователь не авторизован и перед ним будет выводиться окно авторизации, происходит это за счёт запуска дочернего компонента «Authorization», который, в свою очередь, отвечает за авторизацию пользователя. Вызов компонента происходит при помощи следующей конструкции: 
<Authorization authorization={this.authorization}/>

В дочерние компоненты можно передать аргументы и функции из родительского компонента. Когда пользователь введет верные пароль и логин, система изменит состояние авторизации пользователя на «true» и окно авторизации моментально исчезнет из Virtual DOM дерева [18]. Далее система сравнивает состояние «user» с 4-мя вариантами развития событий:
- если пользователь имеет роль «Администратор», то запускается компонент (<Administrator />) и перед пользователем открывается приложение с правами доступа «Администратор»
- если пользователь имеет роль «Управляющий», то запускается компонент (<Manager />) и перед пользователем открывается приложение с правами доступа «Управляющий»
- если пользователь имеет роль «Куратор», то запускается компонент (<Curator />) и перед пользователем открывается приложение с правами доступа «Куратор»
- если пользователь имеет роль «Специалист филиала», то запускается компонент (<BranchSpecialist />) и перед пользователем открывается приложение с правами доступа «Специалист филиала»
Личный кабинет администратора включает в себя полный функционал приложения. Компонент (<Administrator />) имеет следующие импортированные дочерние компоненты и библиотеки:
- import React from 'react'; - импортирование библиотеки React;
- import PersonalArea from './personalArea.js'; - импортирование дочернего компонента «Модальное окно личного кабинета»;
- import Equipment from './equipment.js'; - импортирование дочернего компонента «Выбор филиала и оборудования»;
- import Statement from './statement.js'; - импортирование дочернего компонента «Ведомости»;
- import Its from './its.js'; - импортирование дочернего компонента «Индекс технического состояния»;
- import Failures from './failures.js'; - импортирование дочернего компонента «Отказы оборудования»; 
- import Settings from './settings.js'; - импортирование дочернего компонента «Настройки»;
- import PersonalData from './personalData.js'; - импортирование дочернего компонента «Личные данные»;
- import Notifications from './notifications.js'; - импортирование дочернего компонента «Уведомления»;
- import update from 'immutability-helper'; - импортирование библиотеки для работы с массивом состояний;
- import Cookies from 'js-cookie'; - импортирование библиотеки для работы с Cookies;
- import alert from './svg/alert.svg';  - импортирование svg файла.
Программный код метода render() компонента (<Administrator />):
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
Функция «this.createButtons()» служит для отображения панели навигации приложения («Выбор филиала и оборудования», «Ведомости», «Индекс технического состояния», «Отказы оборудования», «Настройки»).
 
Функция «this.createBody()» выводит один из пяти компонентов, в зависимости от того, какая вкладка открыта на панели навигации. Создан массив состояний «this.state.stateButtonsArr:[true,false,false,false,false]», который соответствует вкладкам на панели навигации. Когда пользователь нажимает на одну из вкладок, состояние выбранной вкладки становится «true», а все остальные становятся «false». При изменении состояния повторно запускается метод render() в котором находится функция «this.createBody()». Программный код функции «this.createBody()» представлен ниже:
createBody = (e) => {
  var table = [];
  table=this.state.pagesArr.map((obj,i)=> {
    if (this.state.stateButtonsArr[i] === true)
    return(<div key={i}>{this.state.pagesArr[i]} </div>);
    return null;
});
return table;
}
В данном случае, массив состояний «this.state.pagesArr[i]» содержит в себе компоненты страниц, таким образом происходит изменение элементов Virtual DOM-дерева с последующим обновлением настоящего DOM.
Для обновления массива состояний используется библиотека 'immutability-helper' и метод update(), конструкция использования метода показана ниже:
clickButtonFunc = (i) => {
  this.state.stateButtonsArr.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        stateButtonsArr: update(state.stateButtonsArr,{[e]:  {$set: true}}),
        clickButtonsArr: update(state.clickButtonsArr,{[e]:  {$set: "clickButton"}}),
        personalAreaStateArr: [false, false],
      }))
    else
      this.setState((state, props) => ({
        stateButtonsArr: update(state.stateButtonsArr,{[e]:  {$set: false}}),
        clickButtonsArr: update(state.clickButtonsArr,{[e]:  {$set: ""}}),
      }))
  });
}
Метод update() берет один элемент массива состояний и обновляет только его, остальные остаются неизменными.




Компонент <Statement /> отвечает за работу вкладки «Ведомости». В нем импортируются следующие дочерние компоненты и библиотеки:
- import React from 'react'; - импортирование библиотеки React;
- import update from 'immutability-helper'; - импортирование библиотеки для работы с массивом состояний;
- import checkMark from './svg/checkMark.svg'; - импортирование svg файла;
- import danger from './svg/danger.svg'; - импортирование svg файла;
- import MonthStatement from './monthStatement.js'; - импортирование дочернего компонента «Выбор месяца ведомости».
В этом компоненте есть два режима работы: первый режим заполнения ведомости, второй режим просмотра ведомостей. К кнопкам «Заполнить ведомость» и «Просмотр ведомости» прикреплены состояния this.state.statementBut1 и this.state.statementBut2 соответственно. Когда пользователь нажимает на одну из этих кнопок, срабатывает тег «onClick», к которому привязана функция this.clickStatementButtonFunc(), в ней состояние кнопки обновляется и становится «true». Как только состояние изменилось, автоматически запускает метод render() который обновляет элементы HTML страницы. В зависимости от кнопки включается тот или иной режим работы системы. На рисунке 3.3. представлены кнопки «Заполнить ведомость» и «Просмотр ведомости».
 
Режим заполнения ведомости. Таблица ввода фактических параметров строится с помощью функции this. createTableStatement(), в ней с помощью скрипта выводится таблица и все поля ввода. Вывод таблицы происходит за счёт метода map(), который является оператором цикла, создающий новый массив данных, именно он и возвращается из функции и выводится в HTML странице. Функция createTableStatement() представлена ниже:
createTableStatement = (e) => {
  var arr = this.state.nameParamsArr, table = [], j = 0;
    table =arr.concat(arr).map((obj,i)=> {
      if (i % 2 === 0){
        if (i !== 0) j++;
        return(<tr className="lineTab" id ="tabGray" key={i}><td className = {this.state.classNameTabArr[j]} rowSpan="2" title={this.state.hintsArr[j]}><label>{arr[j]}</label></td><td id="noLine" className="rightTextTab" title = "Нормальное значение параметра">Норма:</td><td>{this.state.normValueTabArr[j]}</td><td rowSpan="2">{(parseFloat(this.state.valueTabArr[j]) > parseFloat(this.state.normValueTabArr[j]))?(<img title="Значение параметра не соответствует норме." src={danger} alt="danger"/>):((parseFloat(this.state.valueTabArr[j]) <= parseFloat(this.state.normValueTabArr[j]))?(<img title="Значение параметра соответствует норме." src={checkMark} alt="checkMark"/>):(null))}</td></tr>)}
      else return(<tr className="lineTab" key={i}><td className="rightTextTab" title = "Фактическое значение параметра">Факт:</td><td><input  onClick={(e)=>{this.classNameTabFunc(Math.floor(i/2));}} type="number" placeholder = "Введите значение" value={this.state.valueTabArr[Math.floor(i/2)]} onChange={(e)=>{this.changeValueTabFunc(e, Math.floor(i/2));}}></input></td></tr>)
});
return table;
} 
Ввод параметров осуществляется с помощью функции this. changeValueTabFunc(), которая считывает данные введенные пользователем и сохраняет в массиве состояний фактических значений параметров. Программный код функции ввода представлен ниже:
changeValueTabFunc = (e, i) => {
  var value = e.target.value;
  this.setState((state, props) => ({
    valueTabArr: update(state.valueTabArr,{[i]:  {$set: value}}),
  }))
}
Функция this.createDateAndDeviationFunc() отвечает за вывод таблицы причин отклонения параметров котлоагрегата. Функция представляет из себя скрипт, который зависит от отклонения конкретного параметра от его нормы. Когда значение фактического параметра больше нормы этого параметра, функция отображает специальное окно с вводом причины отклонения, мероприятий по устранению замечаний и плановой даты устранения. Данная функция сравнивает эти два значения в массивах состояний применяя следующее условие:
parseFloat(this.state.valueTabArr[i]) > parseFloat(obj)
На рисунке 3.4. представлена таблица вывода причин отклонения параметров.
 
Функция this.createDateRepairsFunc() отвечает за вывод таблицы дат ремонта оборудования. Данная функция также использует метод map() для вывода таблицы. Ниже на рисунке 3.5. показана эта таблица.
 
Режим просмотра ведомости. Когда выбран режим просмотра ведомости состояние второй кнопки становится «true», запускается метод render(), который заново компилирует HTML страницу с учетом измененного состояния. Перед пользователем появляется новая таблица выбора месяцев и года – за ее вывод отвечает функция this.createButtonsMonthAndYearFunc(). К каждому месяцу привязана кнопка с вызовом функции this.changeMonth(), которая изменяет элемент массива состояний this.clickMonthArr. Для вывода нужного месяца используется функция this.clickMonthFunc(), которая напрямую зависит от массива состояний this.clickMonthArr, когда одно из состояний становится «true», то данная функция проверяет, если состояние равно «true», то выводит необходимый месяц. Программный код функции представлен ниже:
clickMonthFunc = (e) => {
  var table = [];
  table=this.state.clickMonthArr.map((obj,i)=> {
    if (this.state.clickMonthArr[i] === true)
    return(<div key={i}><MonthStatement year={i} month ={this.state.monthArr[i]}/> </div>);
    return null;
});
return table;
}
 
Вывод месяца происходит посредством запуска дочернего компонента <MonthStatement /> с передачей необходимых аргументов. После вывода конкретного месяца для пользователя включен режим чтения данных, который не позволяет редактировать данные в ведомостях. Кнопка «Редактировать» снимает эти ограничения, все поля становятся доступными для заполнения, за это отвечает смена одного состояния this.state.change, когда оно равно «true» - ограничения сняты, а когда «false» - режим чтения.
Для вывода таблицы ежегодной сводки используется следующий программный код:
<table><tbody>
        <tr>{this.createTableMonth()}</tr>
        {this.createTableStatementYear()}
        <tr id="lineTabLast">{this.createTableFuel()}</tr>
 </tbody></table>
 
Подряд вызываются три функции, this.createTableMonth() отвечает за первую строку таблицы (месяцы), вторая функция отвечает за параметры технического состояния и this.createTableFuel() функция отвечает за вывод последней строки таблицы с выбором radioButton.
 Функция this.createTableStatementYear() выводит готовые строки таблицы, созданные функцией this.createLineTableStatementYear(). Программный код функции this.createLineTableStatementYear() показан ниже:
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
return table;}
Осуществление расчёта индекса технического состояния оборудования




Компонент <Its /> отвечает за вывод вкладки «Индекс технического состояния. В нем импортируются следующие дочерние компоненты и библиотеки:
- import React from 'react'; - импортирование библиотеки React;
- import update from 'immutability-helper'; - импортирование библиотеки работы с массивом состояний;
- import plus from './svg/plus.svg'; - импортирование svg файла;
- import minus from './svg/minus.svg'; - импортирование svg файла;
- import checkMark from './svg/checkMark.svg'; - импортирование svg файла;
- import danger from './svg/danger.svg'; - импортирование svg файла;
- import warning from './svg/warning.svg'; - импортирование svg файла;
- import Ball from './ball.js'; - импортирование дочернего компонента «Уточнение балла».
В этом компоненте есть два режима работы: первый режим расчёта ИТС, второй режим просмотра ИТС. К кнопкам «Расчёт ИТС» и «Просмотр ИТС» прикреплены состояния this.state.statementBut1 и this.state.statementBut2 соответственно. Когда пользователь нажимает на одну из этих кнопок, срабатывает тег «onClick», к которому привязана функция this.clickStatementButtonFunc(), в ней состояние кнопки обновляется и становится «true». Как только состояние изменилось, автоматически запускает метод render() который обновляет элементы HTML страницы. В зависимости от кнопки включается тот или иной режим работы системы. На рисунке 3.8. представлены кнопки ««Расчёт ИТС» и «Просмотр ИТС».
 
Режим расчёта ИТС. Расчёт индекса технического состояния представляет из себя таблицу, в которой находятся 25 параметров групп функциональных узлов, которые заполняет пользователь. Для автоматической работы расчёта были написаны несколько основных функций:
- this.createFirstLineITS() – функция для отображения первой строки таблицы расчёта ИТС, при прокрутке строка остается на месте;
- this.createTableITS() – главная функция для отображения таблицы расчёта ИТС, в ней запускается функция this.createLineITS(), которая отображает каждую строку таблицы;
- this.createLineITS() – функция, которая отображает каждую ячейку строки, в которой происходят вычисления;
- this.hideOrRevealFunc() – функция для того, что скрывать и разворачивать параметры групп функциональных узлов;
- this.changeValueFactFunc() – функция ввода фактических значений параметров, которая запускает расчёт ИТС;
- this.selectParamFunc() – функция отображения списка выбора значений фактических параметров для некоторых групп функциональных узлов;
- this.selectFunc() – функция, которая отвечает за выбор фактического значения для параметра из списка доступных;
- this.fnFunc() – функция расчёта отношения фактического значения к норме или ее показателю;
- this.ballCalculationFunc() – функция расчёта балла технического параметра исходя из его показателя;
- this.itsGroupParamFunc() – функция расчёта ИТС технического параметра узла;
- this.itsFuncNodeFunc() – функция расчёта ИТС функционального узла;
- this.itsFunc() – функция расчёта ИТС с коэффициентом КУ;
- this.itsCalculation() – функция расчёта итогового значения ИТС котлоагрегата.
Функция this.createTableITS() запускается в методе render() каждый раз когда изменяется какое-либо состояние и отображает все таблицу расчёта ИТС. Ниже представлен код этой функции:
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
Далее внутри функции this.createTableITS() запускается вторая основная функция для отображения каждой строки таблицы this.createLineITS() которая отображает каждую ячейку строки в зависимости от того, какой столбец таблицы.
 
При вводе фактического значения параметра запускается функция this.changeValueFactFunc(), которая обновляет состояние и сохраняет введенные данные. А также запускает функцию расчёта показателя параметра this.fnFunc(), которая обновляет ячейку столбца «Показатель» для выбранного параметра, на ее основе запускается следующая функция расчёта балла показателя this.ballCalculationFunc(). Данная функция сравнивает значение показателя параметра с таблицей критериев вычисления балла (для каждого параметра свои критерии баллов) и обновляет значение балла. Ниже представлен программный код функции this.ballCalculationFunc():
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
                a = this.state.numberBallArr[i][j].split(' ')[0]; b = this.state.numberBallArr[i][j].split(' ')[1];
                if (parseFloat(a) < parseFloat(this.state.FNArr7[i]) && parseFloat(this.state.FNArr7[i]) <= parseFloat(b))  this.ballStateFunc(i,this.state.ballArr[i][j]); }
            else if (obj === "=" && parseFloat(this.state.FNArr7[i]) === parseFloat(this.state.numberBallArr[i][j]))
                this.ballStateFunc(i,this.state.ballArr[i][j]);
        });} else this.ballStateFunc(i,""); }
  return this.state.ballArr9[i];
Далее запускается функция расчёта ИТС технического параметра узла this.itsGroupParamFunc() которая берет значение балла, который рассчитывался функцией this.ballCalculationFunc(), и выбирает наименьший балл группы параметров и умножает его на статичный коэффициент КВi технического параметра и результат делит на 4. После обновления состояний, запускает следующая функция расчёта ИТС для группы параметров - this.itsFuncNodeFunc(). Эта функция рассчитывает сумму ИТС параметров группы деленную на 4. После вычисления ИТС группы запускается функция расчёта ИТС функционального узла this.itsFunc(), которая берет вычисленное значение столбца «ИТС параметра группы»  и умножает на статичный коэффициент КУ из чего вычисляется итоговое значение ИТС группы. Последняя функция this.itsCalculation() суммирует итоговые значения ИТС групп и выводит индекс технического состояния котлоагрегата.
При изменении любого параметра запускается череда функций, которые пересчитывают значения параметров и итоговое значение ИТС котлоагрегата. Каждый параметр имеет свои критерии баллов, в зависимости от которых выводятся три предупреждающих знаков о несоответствии параметров. Визуализация знаков показана на рисунке 3.10.
 
Функция this.hideOrRevealFunc() скрывает и разворачивает функциональные узлы для удобного просмотра итоговых значений параметров ИТС группы. 

Режим просмотра ИТС. Когда выбран режим просмотра ИТС состояние второй кнопки становится «true», запускается метод render(), который заново компилирует HTML страницу с учетом измененного состояния. Перед пользователем появляется новая таблица выбора месяцев и года – за ее вывод отвечает функция this.createButtonsMonthAndYearFunc(). К каждому месяцу привязана кнопка с вызовом функции this.changeMonth(), которая изменяет элемент массива состояний this.clickMonthArr. Для вывода нужного месяца используется функция this.clickMonthFunc(), которая напрямую зависит от массива состояний this.clickMonthArr, когда одно из состояний становится «true», то данная функция проверяет, если состояние равно «true», то выводит необходимый месяц.
Таблица расчёта ИТС блокируется для пользователя, а функциональные узлы находятся в свернутом состоянии для удобства просмотра информации. Кнопка «Редактировать» разблокирует все поля ввода. Функция this.createTableITSYear() выводит таблицу ежегодной сводки ИТС. Программный код этой функции представлен ниже:
createTableITSYear = (e) => {
  var arr = this.state.funcNodeArr1, table = [], j = 0;
    table =arr.concat(arr).map((obj,i)=> {
      if (i % 2 === 0){
        if (i !== 0) j++;
        return(<tr className="lineTab" id ="tabGray" key={i}>{this.createLineTableITSYear(j, true)}</tr>)}
      else return(<tr className="lineTab" key={i}>{this.createLineTableITSYear(Math.floor(i/2), false)}</tr>)
});
return table;
}




Компонент <Failures /> отвечает за вывод вкладки «Отказы оборудования». В нем импортируются следующие библиотеки:
- import React from 'react'; - импортируется библиотека React;
- import update from 'immutability-helper'; - импортируется библиотека для работы с массивом состояний;
Компонент состоит из 3-х главных таблиц:
- таблица выбора поверхности аварийного отключения;
- таблица выбора даты аварийного отключения;
- таблица вывода справки о причине аварийного отключения.
Таблица выбора поверхности аварийного отключения выводится благодаря функции this.createTableFailures(), при клике на строку таблицы обновляется состояние массива выбора параметра поверхности this.state.dateFailuresChoiceArr, строка визуально подсвечивается и все следующие таблицы изменяются. Обновление одного состояния массива происходит за счет конструкции:
this.setState((state, props) => ({
      dateChangeArr: update(state.dateChangeArr,{[i]:  {$set: value}}),
    }))

Функция ввода информации this.changeValueFunc(e, i, 3), которая обновляет и сохраняет введенную информацию во всех трех столбцах таблицы.
Вторая таблица выбора даты аварийного отключения выводится при помощи функции this.createTableChoiceDateFailures(). Как и у предыдущей таблицы, у этой можно выбрать дату с характерным подсвечиваем, при этом изменится состояние выбора и в третьей таблице изменится информация характерная для выбранной даты. Программный код функции представлен ниже:
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

Третья таблица выводит поле ввода для выбранной даты аварийного отключения, чтобы описать причину аварии. За вывод этой таблицы отвечает функция this.createTableReferenceFailures().

Также присутствуют кнопки добавления, редактирования и удаления аварийных дат. Чтобы добавить новую дату нужно нажать на кнопку «добавить новую дату» при этом срабатывает тег «OnClick» и запускается функция this.addDateFunc(), в таблице выбора дат аварийного отключения добавляется новое поле ввода даты. При клике на кнопку «Удалить» срабатывает тег «OnClick» и запускается функция this.deleteDateFunc() и выбранное поле даты удалиться. Кнопка «Редактировать» дает возможность редактирования всей информации, срабатывает тег «OnClick» и запускается функция this.changeFunc(), которая снимает блокировку со всех полей ввода в таблицах. Кнопка «Сохранить» сохраняет все изменения, произведенные в таблицах.




Компонент <Settings /> отвечает за вывод вкладки «Настройки». В нем импортируются следующие библиотеки:
- import React from 'react'; - импортируется библиотека React;
- import update from 'immutability-helper'; - импортируется библиотека для работы с массивом состояний;
- import eye from './svg/eye.svg'; - импортирование svg файла;
- import eyeClose from './svg/eyeClose.svg'; - импортирование svg файла;
Компонент состоит из 3-х главных таблиц:
- таблица выбора филиала организации;
- таблица выбора пользователя филиала;
- таблица вывода личных данных или лога действий пользователя.
Таблица выбора филиала состоит из 4-х филиалов (КТЭЦ-1, КТЭЦ-2, НЧТЭЦ, ЗГРЭС) и отображается при помощи функции this.createTableBranches(). При клике на филиал запускается функция this.clickBranchFunc(), которая обновляет состояния выбора филиала для изменения второй и третьей таблицы компонента. Код функции представлен ниже:
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

Таблица выбора пользователя филиала выводится благодаря функции this.createTableUsers(), при клике на пользователя запускается функция выбора this.choiceFunc(), которая обновляет состояние выбора и изменяет данные в таблице личных данных и лога действия пользователя. Код функции представлен ниже:
choiceFunc = (i,name,branch,role) => {
  this.setState({
    choice: i,
    usersDataArr: [name,branch,role,"","",""],
    pass: "password",
    eye: eye,
  })
}

Третья таблица вывода личных данных или лога действий отображается функциями this.createUsersDataTable() и this.createTableLog() соответственно. Кнопки «Личные данные» и «Лог действий» отвечают за вывод соответствующих таблиц данных, при клике состояние выбранной кнопки становится «true» и информация отображается на HTML странице. Таблица личных данных меняется в зависимости от выбранного пользователя и филиала и состоит из 6 полей ввода, за ввод данных отвечает функция this.changeValueDataFunc(). При клике на кнопку сохранить вызывается функция this.saveDataFunc(), которая сохраняет измененную информацию.




Компонент <Notifications /> отвечает за вывод вкладки «Уведомления». В нем импортируются следующие библиотеки:
- import React from 'react'; - импортируется библиотека React;
- import update from 'immutability-helper'; - импортируется библиотека для работы с массивом состояний;
Компонент состоит из 3-х главных таблиц:
- таблица выбора филиала организации;
- таблица выбора пользователя с ролью «Специалист филиала»;
- таблица вывода отчётов, отправленных на согласование.
Таблица выбора филиала состоит из 4-х филиалов (КТЭЦ-1, КТЭЦ-2, НЧТЭЦ, ЗГРЭС) и отображается при помощи функции this.createTableBranches(). При клике на филиал запускается функция this.clickBranchFunc(), которая обновляет состояния выбора филиала для изменения второй и третьей таблицы компонента.
На рисунке 3.19. представлена таблица выбора филиала.
   
Рисунок 3.19. Таблица выбора филиала
Таблица выбора пользователя филиала с ролью «Специалист филиала» выводится благодаря функции this.createTableUsers(), при клике на пользователя запускается функция выбора this.choiceFunc(), которая обновляет состояние выбора и изменяет данные в таблице личных данных и лога действия пользователя. Код функции представлен ниже:
choiceFunc = (i,name,branch,role) => {
  this.setState({
    choice: i,
    usersDataArr: [name,branch,role,"","",""],
  })
}

Таблица вывода уведомлений о согласовании отчёта выводится отдельно по каждому сотруднику филиала благодаря функции this.createTableNoti(). Код представлен ниже:
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

При клике на выбранный отчёт открывается окно согласования отчёта, то есть сам отчёт со всеми заполненными полями при помощи функции this.statementCheck(). При клике на кнопку «Согласовать» срабатывает тег «OnClick» и запускается функция this.trueFunc(), которая подтверждает что отчёт согласован и изменяет его статус с «На согласовании» на «Согласован».  При клике на кнопку «Отправить на доработку» срабатывает тег «OnClick» и запускается функция this.falseFunc(), которая предлагает написать комментарий о причине возврата отчёта и отправляет отчёт обратно сотруднику, также изменяет статус отчёта с «На согласовании» на «Отклонен». 

