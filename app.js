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

//Inicia servidor
app.listen(port,()=> {
    console.log(('servidor preparado en el puerto'),port)
});