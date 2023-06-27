import React from 'react';
import update from 'immutability-helper';

export class Equipment extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    nameBranchesArr: ["КТЭЦ-1","КТЭЦ-2","НЧТЭЦ","ЗГРЭС"],
    idBranchesArr: ["clickBranch","","",""],
    stateBranchesArr: [true,false,false,false],
    hintsArr: ["Казанская теплоэлектроцентраль №1", "Казанская теплоэлектроцентраль №2","Набережночелнинская теплоэлектроцентраль","Заинская государственная районная электростанция"],
    equipmentArr: [["Котлоагрегат №1","Котлоагрегат №2","Котлоагрегат №3","Котлоагрегат №4","Котлоагрегат №5","Котлоагрегат №6","Котлоагрегат №7","Котлоагрегат №8","Котлоагрегат №9","Котлоагрегат №10","Котлоагрегат №11","Котлоагрегат №12"],["Котлоагрегат №1","Котлоагрегат №2","Котлоагрегат №3"],["Котлоагрегат №1","Котлоагрегат №2","Котлоагрегат №3","Котлоагрегат №4","Котлоагрегат №5","Котлоагрегат №6","Котлоагрегат №7","Котлоагрегат №8"],["Котлоагрегат №1","Котлоагрегат №2","Котлоагрегат №3","Котлоагрегат №4"]],
  };
}

clickBranchFunc = (i) => {
  this.state.stateBranchesArr.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        stateBranchesArr: update(state.stateBranchesArr,{[e]:  {$set: true}}),
        idBranchesArr: update(state.idBranchesArr,{[e]:  {$set: "clickBranch"}}),
      }))
    else
      this.setState((state, props) => ({
        stateBranchesArr: update(state.stateBranchesArr,{[e]:  {$set: false}}),
        idBranchesArr: update(state.idBranchesArr,{[e]:  {$set: ""}}),
      }))
  });
}
createTableBranches = (e) => {
  var table = [];
  table=this.state.nameBranchesArr.map((obj,i)=> {
    return(<tr key={i}><td title={this.state.hintsArr[i]} id={this.state.idBranchesArr[i]} onClick={(e)=>{this.clickBranchFunc(i);}}><label>{this.state.nameBranchesArr[i]}</label></td></tr>)
});
return table;
}
createTableEquipment = (e) => {
  var table = [];
  this.state.equipmentArr.forEach((obj,i)=> {
    if (this.state.stateBranchesArr[i] === true){
    this.selectBranch = this.state.nameBranchesArr[i];
    table = this.equipArrFunc1(this.state.equipmentArr[i]);
  }
});
return (table);
}
equipArrFunc1 = (arr) => {
  this.rows = Math.ceil(arr.length/4);
  this.arr = [];
  var j=0;
  for (var i=0; i<this.rows; i++) {
    this.arr[i] = arr.slice(j, j+4);
    j = j +4;
  }
    var rows = [];
    rows=this.arr.map((obj,i)=> {
      return(<tr key ={i}>{this.equipArrFunc2(obj)}</tr>)
  });
  return rows;
}
equipArrFunc2 = (arr) => {
  var columns = [];
  columns = arr.map((obj,j)=> {
    return(<td key ={j} onClick={(e)=>{this.clickEquipFunc(obj);}}><label>{obj}</label></td>)
  });
  return columns;
}
clickEquipFunc = (obj) => {
this.props.choiceBranchAndEquip(this.selectBranch + " " + obj);
}
render(){
  return(<div className="equip">
    <table><tbody>
      {this.createTableBranches()}
    </tbody></table>
    <table className="equipTab"><tbody>
      {this.createTableEquipment()}
    </tbody></table>
  </div>)
  }
}

export default Equipment;
