//localhost:3001/profileFilter?nombreCurso=Java

 const {profile,} = require('../../media');

 function getFilterByKey(array,key,value){
     return array.filter(function(e){
         return e[key]==value;
         //.toLowerCase==value.toLowerCase();
     });
 }

 function controller(req,res){
     console.log(req.query)
     let user=getFilterByKey(profile,"nombreCurso",req.query.nombreCurso)
     res.json(user)
 };

module.exports=controller;