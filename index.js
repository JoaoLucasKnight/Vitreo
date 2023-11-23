const express = require('express');
const bigode = require('mustache-express');
const session = require('express-session')
const data = require('./src/dados.js');

const app = express();
const bodyParser = require('body-parser');



//render html
app.engine('html', bigode());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');
app.use(express.static(__dirname + '/root'));

//manipular dados
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// definindo sessão
app.use(session({
    secret: 'secret-token',
    name: 'sessionId',  
    resave: false,
    saveUninitialized: false
}))


//rotas
app.use('/', require("./src/routes/rotas.js"));



data.sync(() => console.log(`Banco de dados conectado`));
const PORT = 7999


app.listen(PORT, () =>{
    console.log("Escutando")
})