var express=require('express');
var router=express.Router();
var EmpController=require('../Controllers/Pass.Controller');



router.get('/:Password', (req, res) => {
    EmpController.getOne(req.params.password).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});


module.exports=router;