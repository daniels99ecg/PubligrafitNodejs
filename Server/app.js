const express=require('express');
const resApi = require('./Router/index.js');
const hbs=require('hbs');
const cors=require("cors")

const path=require('path');
const conexion = require('./database/db.js');


const app=express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors())

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


hbs.registerPartials(__dirname + '/View', function (err) {});
hbs.registerPartials(__dirname + '/View/Empleado', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/View');  


// app.get('/', (req, res)=>{
//     res.status(200).render('../View/dashboard');
// })

app.get('/', (req, res)=>{

    res.status(200).render('../View/login');

})

//Login
app.post('/ingreso', (req, res)=>{
    const correo=req.body.correo;
    const contrasena=req.body.contrasena;
    conexion.query(`SELECT * FROM usuario WHERE email='${correo}' and contrasena='${contrasena}' and estado=true` , function(error, result, fields){
        
        if(error){
            throw error;
        }else{
            if(result.length>0){
                const user=result[0]
                    if(user.fk_rol2===1){     
                        res.status(200).render('../View/dashboard')
                    }
                    else{
                        res.status(400).render('../View/Empleado/dashboard2');
                    }     
            }
            else{
              res.status(400).send('No ingreso');
            }
        }     
        });
})


app.get('/dashboard', (req, res)=>{
    res.status(200).render('../View/dashboard')
})

//Llamado a la funcion donde estan todas las rutas 
resApi(app);


app.listen(3001, ()=>{
    console.log('Server in line')
})