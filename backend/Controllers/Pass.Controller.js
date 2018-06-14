var mongoose = require ('../DBSchema/DBConfig');
var schema =mongoose.model('employee');

var controller =function(){

  
    this.getOne = (password) => {
        return new Promise((resolve, reject) => {
            console.log(Password);
            //var password = new RegExp(["^", Password, "$"].join(""), "i");
            schema.find({Password:password}).then((data) => {
                resolve({status: 300, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

 

}

module.exports=new controller();