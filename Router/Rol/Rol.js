const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');
const Swal =require('sweetalert2');


Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));

const rol=require('../../Controller/Rol/RolController');
const Rol = require('../../Service/Roles/RolModel');
const Roles=new rol();


//Muestra la vista de los roles
Router.get('/', Roles.mostrarRoles)

//Buscar los roles individual
Router.post('/buscar/', Roles.BuscarRoles)


Router.get('/create', (req, res)=>{
    
    res.status(200).render('../View/Registrar-Roles');
})

//Guardar los Roles
Router.post('/save', Roles.guardarRoles)

//Elinimar los Roles
Router.get('/eliminar/:id', Roles.Eliminar)

//Actualizar los Roles
Router.get('/update/:id', Roles.Update)

//Guardar lo actualizado
Router.post('/update/in/', Roles.UpdateGuardar)

//Vista para mostrar la plantilla de actualizar
Router.get('/update', (req, res)=>{
        
    res.status(200).render('../View/Actualizar-Usuario')
})

//Vista para mostrar los roles
Router.get('/asignar', Roles.asignarRoles)


//Guardar la asignacion de los roles      
Router.post('/asignar/save', Roles.asignarRolGuardar)
    
module.exports=Router;