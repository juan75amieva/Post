//importar librerias y dependencias

const { query } = require('express');
const express = require ('express')

//definir constantes

const server = express();
const listenPort =8080;


const carpetaFront = express.static(__dirname +'/front');
server.use(carpetaFront);


//soporte Json

server.use(express.urlencoded({extended:true}));
server.use(express.json()); 

server.get('/myjson', (req,res)=>{

    const respuesta=    {
        'Nombre':'Espagueti',
        'apellido':'Volador',
        'edad': 45,
        'habilidades':['pocas', 'por','no','decir','nulas']
    }
    res.send(respuesta);
});

server.get('/hello', (req,res)=>{
    const username = req.query.u;
    const password = req.query.p;

    console.log(req.query.u)
    console.log(req.query.p)
    res.send("Hola, " + username );

});

server.post('/signup',(req,res)=>{
    const name = req.body.firstname;
    const email = req.body.email;
    const country = req.body.country;

    //Business logic

    if(country === "ar"){
        console.log('este boludo es argentino');

    }
    else
    if(country === "br"){
        console.log('este es un garoto du fogo');
        
    }

    res.redirect('/');
});

server.use((req,res,) =>{
    res.status(404).send('Estos androides no son los que buscas');
});

server.listen(listenPort,
    () => console.log(`El servidor esta corriendo en ${listenPort}`)
    
);