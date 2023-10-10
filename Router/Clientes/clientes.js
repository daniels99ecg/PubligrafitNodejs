const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');

const Clientes=require('../../Controller/Cliente/clienteController')
const Clientes1=new Clientes()
Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));

//Mostrar los clientes en la pagina 
Router.get('/', Clientes1.mostrarCliente)



Router.post('/search/', (req, res) => {
    const id = req.body.id;
    conexion.query(`SELECT * FROM cliente WHERE dni_cliente='${id}'`, function(error, result, fields) {
    if (error) {
        throw error
    } else {
        res.status(200).render('../View/Clientes-Search', { title: result });
    }
    });
    
});

Router.get('/create', (req, res)=>{
    
    res.status(200).render('../View/Registrar-Clientes');
  
})

Router.post('/save', async (req, res)=>{

    const dni = parseInt(req.body.dni);
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const email=req.body.email;   

     conexion.query(`INSERT INTO cliente SET ?`, {dni_cliente: dni, nombres: nombre, apellidos: apellido, telefono: telefono, direccion: direccion, email: email}, function(error, result, fields){
        if(error){
            console.log(error);
        }else{
            res.redirect('/clientes');
        }     
        });
})

Router.get('/reporte', (req, res)=>{

    conexion.query(`SELECT dni_cliente, nombres, apellidos, telefono, direccion, email FROM cliente INTO OUTFILE 'C:/Users/andre/OneDrive/Escritorio/ReporteClientes.xls'` , function(error, result, fields){
    if(error){
        throw error;
    }else{
        setTimeout(function(){
            res.redirect('/clientes');  
        },5000)

    }     
    });

})

Router.get('/eliminar/:id', (req, res)=>{
const id= parseInt(req.params.id);

    conexion.query(`DELETE FROM cliente WHERE dni_cliente='${id}'` , function(error, result, fields){
        if(error){
            console.log(error)
            
        }else{
            res.redirect('/clientes');

        }     
        });
     
})

Router.get('/update/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    
    conexion.query(`SELECT dni_cliente, nombres, apellidos, telefono, direccion, email FROM cliente WHERE dni_cliente='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Actualizar-Clientes', {title:result})

        }     
        });
          
    })

Router.post('/update/in/',(req, res)=>{ 
   
    const dni = parseInt(req.body.dni);
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const email=req.body.email;   
       
    conexion.query(`UPDATE cliente SET dni_cliente=${dni}, nombres='${nombre}', apellidos='${apellido}', telefono='${telefono}', direccion='${direccion}', email='${email}' WHERE dni_cliente='${dni}'`, function(error, result, fields){
    if(error){
        console.log(error);
    }else{
        res.redirect('/clientes');
    }     
    });
})

    Router.get('/update', (req, res)=>{
             
        res.status(200).render('../View/Actualizar-Clientes')
         
    })
    
module.exports=Router;