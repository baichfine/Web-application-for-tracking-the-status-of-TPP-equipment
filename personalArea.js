import React from 'react';
import alert2 from './svg/alert2.svg';

export class PersonalArea extends React.Component{
constructor(props) {
  super(props);
  this.state = {

  };
}

render(){
  return(<div className = "personalModal">
          <table><tbody>
            <tr><td><button onClick={(e)=>{this.props.showPersonalOrNotiFunc(0);}}>Личные данные</button></td></tr>
            <tr><td><button onClick={(e)=>{this.props.showPersonalOrNotiFunc(1);}}>Уведомления <span id="red">(4)<img src={alert2} alt="alert2"/></span></button></td></tr>
            <tr><td><button onClick={(e)=>{this.props.authorization(e);}}>Выход</button></td></tr>
          </tbody></table>
      </div>)
  }
}

export default PersonalArea;
