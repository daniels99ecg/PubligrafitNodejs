const express=require('express')
const Router=express.Router()
const conexion=require('../database/db');
const path=require('path');
const Swal =require('sweetalert2');

Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));


Router.get('/', (req, res)=>{

    conexion.query('SELECT rxp.id_rol_x_permiso, r.nombre_rol, p.nombre_permiso FROM rol r, rol_x_permiso rxp, permiso p WHERE rxp.fk_rol=r.id_rol and rxp.fk_permiso=p.id_permiso;' , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Listar-Roles', {title:result})

        }     
        });
  
})


Router.get('/create', (req, res)=>{
    //validacion 

    res.status(200).render('../View/Registrar-Roles');
  
})


Router.post('/save', async (req, res)=>{


    const nombre=req.body.nombre;
    const fecha=req.body.fecha;
    
    
        conexion.query(`INSERT INTO rol SET ?`, {nombre_rol:nombre, fecha:fecha, estado:1}, function(error, result, fields){
            if(error){
                console.log(error);
            }else{
             
                res.redirect('/rol');
            }     
            });
      
})


Router.get('/eliminar/:id', (req, res)=>{
const id= parseInt(req.params.id);

    conexion.query(`DELETE FROM usuario WHERE id_usuario='${id}'` , function(error, result, fields){
        if(error){
            console.log(error)
            
        }else{
            res.redirect('/usuarios');

        }     
        });
    
    
  
})

Router.get('/update/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    
    conexion.query(`SELECT id_usuario, nombres, apellidos, email, contrasena, estado FROM usuario WHERE id_usuario='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Actualizar-Usuario', {title:result})

        }     
        });
        
        
      
    })


    Router.post('/update/in/',(req, res)=>{ 
        const id=parseInt(req.body.id);
      
        const fk_rol2=parseInt(req.body.fk_rol2);
        const nombres=req.body.nombres;
        const apellidos=req.body.apellidos;
        const email=req.body.email;
        const contrasena=req.body.contrasena;
       
    
        conexion.query(`UPDATE usuario SET fk_rol2=${fk_rol2}, nombres='${nombres}', apellidos='${apellidos}', email='${email}', contrasena='${contrasena}', estado=1 WHERE id_usuario='${id}'`, function(error, result, fields){
            if(error){
                console.log(error);
            }else{
                res.redirect('/usuarios');
            }     
            });
    })


    Router.get('/update', (req, res)=>{
        
             
                res.status(200).render('../View/Actualizar-Usuario')
    
            
          
        })
    
module.exports=Router;