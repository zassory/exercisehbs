const express = require('express');
const { response } = require('express');
const app = express();
const port = 3000;

//hbs
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err){});
app.set('view engine','hbs');
app.set('views',__dirname+"/views");

//Archivos estáticos
app.use(express.static(__dirname + "/public"));

//Rutas
app.get("/",(req,res = response) => {
    res.render('index',{
        titulo:'Inicio'
    });
});

app.get("/soporte",(req,res = rsesponse) => {
    res.render('soporte',{
        titulo:'¿Cómo podemos ayudarte?',
        estado: false,
        soporte: 'Recuperación de la cuenta'
    });
});

app.get("/games",(req,res=response) => {
    res.render('games',{
        titulo: 'Lista de juegos',
        games: [
            { id:'1', nombre:'Valorant',genero:'Shooter' },
            { id:'2', nombre:'Heroes of the storm',genero:'Moba'},
            { id:'3', nombre:'League of legends',genero:'Moba' },
            { id:'4', nombre:'Overwatch',genero:'Acción por equipos' }
        ]
    });
});

//Inicia servidor
app.listen(port,()=> {
    console.log(('servidor preparado en el puerto'),port)
});