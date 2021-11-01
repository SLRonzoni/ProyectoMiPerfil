//localhost:3001/profileFilterAnio?fin=2012

const {profile,} = require('../../media');

function getFilterByKey(array,key,value){
    return array.filter(function(e){
         return e[key]==value;
        //.toLowerCase==value.toLowerCase();
    });
}

function controller(req,res){
   let user=getFilterByKey(profile,"fin",req.query.fin)
  
    res.json(user)
};

module.exports=controller;