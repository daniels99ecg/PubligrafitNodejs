const express=require('express');
const resApi = require('./Router/index.js');
const hbs=require('hbs');
const path=require('path');


const app=express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));



hbs.registerPartials(__dirname + '/View', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/View');





app.get('/', (req, res)=>{
    res.send('Pruebas')
})

resApi(app);


app.listen(3000, ()=>{
    console.log('Server in line')
})