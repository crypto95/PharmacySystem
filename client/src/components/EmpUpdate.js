
import React,{Component} from 'react';

import '../App';

import ReactDOM from "react-dom";
import EmployeeDetails from './EmployeeDetails';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state= {
            Emp_Id:null,
            Email:null,
            Password:null,
            cpassword:null
        }
    }
    UpdateB=(Emp_Id,Email,Password)=>{

        var data={"Emp_Id":Emp_Id,"Email":Email,"Password":Password};

        console.log(data);

        if(Emp_Id==''||Email==''||Password==''){
            alert('One or more fields empty please fill all the fields');
        }

        else{
            fetch('http://localhost:8080/emp/'+data,{
                 method:'PUT',
                body:JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            }).then(response=>{
                return response.json();
            }).then(data=>{
                alert('Update employee');
            }).catch(err=>{
                alert(err);
            })
        }
    }
    login(){
        ReactDOM.render(<EmployeeDetails/>, document.getElementById('root'));
    }


    render(){

        return(
            <div className="container">
                <div className="backimg">

                    <div className="paddinglog">
                        <div class="progress">
                            <div class="progress-bar bar1" role="progressbar"  aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-success bar2" role="progressbar"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-info bar3" role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <form className="paddingsub">
                                <fieldset>
                                   
                                    <h3>Update Employee Username and Password</h3>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Id</label>
                                        <input className="form-control"  aria-describedby="emailHelp" placeholder="Enter name" type="text" ref="Emp_Id"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type="email" ref="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input className="form-control" id="exampleInputPassword1" placeholder="Password" type="password" ref="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                        <input className="form-control" id="exampleInputPassword1" placeholder="Password" type="password" ref="cpassword"/>
                                    </div>
                                   
                                    <button type="button" className="btn btn-primary" onClick={()=>{this.UpdateB()}}>Update</button>
                                </fieldset>
                            </form>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default Signup;