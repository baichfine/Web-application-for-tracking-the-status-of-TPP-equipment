import React from 'react';

export class Ball extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    nameArr: ["ВЭ","Экраны","НПП","ППП","ШПП","КПП"],
    diameterArr: ["25х3,5","60х6","42х5","32х4","32х4","38х6"],
    factArr: ["0,2","0,6","0,4","0","0,4","0,7"],
  };
}
createTableBall = (e) => {
  var table = [];
    table = this.state.nameArr.map((obj,i)=> {
      return (<tr key={i}><td><label>{obj}</label></td><td><label title="Измеряется в мм">{this.state.diameterArr[i]}</label></td><td title="Фактическое значение">{this.state.factArr[i]}</td></tr>)
    });
return table;
}

render(){
    return(<div className = "ballModal">
            <table><tbody>
              <tr><td colSpan="3" className="colorOrange" id="weightBold"><label>{this.props.paramfuncNodeArr3}</label></td></tr>
              <tr><td colSpan="2"><label>Поверхность нагрева</label></td><td rowSpan="2"><label>Факт</label></td></tr>
              <tr><td><label>Название</label></td><td><label>Диаметр и толщина стенки</label></td></tr>
              {this.createTableBall()}
            </tbody></table>
        </div>)
  }
}

export default Ball;
