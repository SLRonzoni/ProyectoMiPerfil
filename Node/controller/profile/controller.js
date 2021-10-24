//localhost:3001/profile

const {profile,} = require('../../media');

function controller(req,res){
    console.log(req.query)
    
    res.json(profile)
};

module.exports=controller;