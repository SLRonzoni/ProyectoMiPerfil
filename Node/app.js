const express=require('express');
const app=express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//CORS
const cors = require('cors');
app.use(cors({origin:"http://localhost:3001",credentials:true}));//poner nro de servidor donde escucha React

// const http = require('http');
const fs=require('fs');

app.use(express.json());

//SETTINGS
app.set('port',process.env.PORT || 3000);

//LLAMADA A LOS CONTROLADORES ( Ruteo )
const {
       profileController,
       profileIdController,
       profileFilterController,
       profileSaveController
      } = require('./controller');

app.get('/profile',[profileController]);//lista todos los cursos  
app.get('/profileId/:id',[profileIdController]); //lista de a un curso
app.get('/profileFilter',[profileFilterController]); //lista de a un nombre
app.post('/profileSave',[profileSaveController]); //agrega un nuevo curso


//SERVIDOR
app.listen(app.get('port'),()=>{
    console.log('Servidor en puerto http://localhost:'+ app.get('port'));
});
