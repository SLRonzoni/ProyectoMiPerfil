//localhost:3001/profileFilter?lenguaje=Java

 const {profile,} = require('../../media');

 function getFilterByKey(array,key,value){
     return array.filter(function(e){
          return e[key]==value;
         //.toLowerCase==value.toLowerCase();
     });
 }

 function controller(req,res){
    let user=getFilterByKey(profile,"lenguaje",req.query.lenguaje)
   
     res.json(user)
 };

module.exports=controller;