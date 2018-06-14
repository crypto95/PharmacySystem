import React, { Component } from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import SearchEmp from './SearchEmp';
import  Register from './registerEmp';
import ResultEmp from './Employeeresult';

import Signup from './EmpUpdate';

class EmployeeDetails extends Component {

  Add=()=>{
    ReactDOM.render(<Register/>,document.getElementById('root'));
} 

Update=()=>{
  ReactDOM.render(<Signup/>,document.getElementById('root'));
} 
  constructor(props){
    super(props)
    this.state={
      resultemp:{},
      id:[],
      type:[],
      name:[],
      email:[],
      address:[],
      tele:[]
    }
  }

  
updateemp(type){
   this.setState({
     resultemp:type
   })
 }

 ID(Emp_Id){
    console.log(Emp_Id);
      const i=this.state.id.concat([Emp_Id])
    this.setState({
      id:i
    })
  }

 Emp_Type(Type){
    console.log(Type);
      const p=this.state.type.concat([Type])
    this.setState({
      type:p
    })
  }

  Emp_Name(Emp_name){
    console.log(Emp_name);
      const c=this.state.name.concat([Emp_name])
    this.setState({
      name:c
    })
  }
  Emp_email(Email){
    console.log(Email);
      const e=this.state.email.concat([Email])
    this.setState({
      email:e
    })
  }

 Emp_address(Address){
    console.log(Address);
      const a=this.state.address.concat([Address])
    this.setState({
      address:a
    })
  }

  Emp_telephone(Telephone){
    console.log(Telephone);
      const t=this.state.tele.concat([Telephone])
    this.setState({
      tele:t
    })
  }

  render() {
    return (
        <div className="container">
        
        <div className="col-md-2">        
         <button type="button"  onClick={this.Add.bind(this)} className="btn btn-info">Add new Enployee</button>
         </div>
         <div className="col-md-2">        
         <button type="button"  onClick={this.Update.bind(this)} className="btn btn-info">Update</button>
         </div>
        <div className="row">
        <div className="col-md-8">
        <div className="col-md-2">
        <div>
      
      </div>
      </div>
    
     <SearchEmp updateState={this.updateemp.bind(this)}/>
     <ResultEmp  employee={this.state.resultemp}
              ID={this.ID.bind(this)}
              Emp_Type={this.Emp_Type.bind(this)}
              Emp_Name={this.Emp_Name.bind(this)}
              Emp_email={this.Emp_email.bind(this)}
              Emp_address={this.Emp_address.bind(this)}
              Emp_telephone={this.Emp_telephone.bind(this)} />
      </div>

       </div>
       
      </div>
    );
  }
}

export default EmployeeDetails;
