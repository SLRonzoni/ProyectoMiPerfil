// localhost:3001/profileId/id
const{profile,} = require('../../media');

  function getFilterBykey(array, key, value){
      return array.filter(function(e){
          return e[key]==value;
      });   
  } 

  function controller(req,res){
      console.log(req.params.id);
      let user=getFilterBykey(profile,"id",req.params.id)
      res.json(user)
  }

module.exports=controller;
