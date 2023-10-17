const express=require('express')
const Router=express.Router()
const path=require('path');
const Swal =require('sweetalert2');
const cors=require("cors")

Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));

const { error } = require('console');


const usuariocontroller=require('../../Controller/Usuario/UsuarioController')
const usuarioCon = new usuariocontroller;

Router.use(cors())

//Ver todos los usuarios
Router.get('/', usuarioCon.buscarUsuario);

//Buscardor
Router.post('/buscar/', usuarioCon.buscadorDeUsuarios)
       

//Generar el reporte
Router.get('/reporte', usuarioCon.generadorReporte)
      
//Muestra la vista de Crear Usuarios
Router.get('/create', usuarioCon.crearUsuarios)
      
//Guarda los usuarios
Router.post('/save', usuarioCon.guardarUsuario)    
          
//Elimina los usuarios 
Router.get('/eliminar/:id', usuarioCon.eliminarUsuario)
        
//Muestra la venta para actualizar cada usuario
Router.get('/update/:id', usuarioCon.mostrarActulizar);
        
//Actualiza los usuarios  
Router.post('/update/in/', usuarioCon.actualizar)

 
Router.get('/update', (req, res)=>{
           
    res.status(200).render('../View/Actualizar-Usuario')
        
})

//Cambiar el estado de los usuarios 
 Router.post('/cambiar/', usuarioCon.cambiarEstadoUsuario);
 
 
    
module.exports=Router;