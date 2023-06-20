const express=require('express')
const Router=express.Router()
const conexion=require('../database/db');
const path=require('path');


Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));


Router.get('/', (req, res)=>{

    conexion.query('SELECT u.id_usuario, u.nombres, u.apellidos, u.email, u.contrasena, r.nombre_rol FROM usuario u, rol r WHERE u.fk_rol2=r.id_rol;' , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Listar-Usuarios', {title:result})

        }     
        });
    
    
  
})


Router.get('/create', (req, res)=>{
    
    res.status(200).render('../View/Registrar-Usuarios');

  
})


Router.post('/save', async (req, res)=>{
    const fk_rol2=parseInt(req.body.fk_rol2);

    const nombres=req.body.nombres;
    const apellidos=req.body.apellidos;
    const email=req.body.email;
    const contrasena=req.body.contrasena;
   

     conexion.query(`INSERT INTO usuario SET ?`, {fk_rol2:fk_rol2, nombres:nombres, apellidos:apellidos, email:email, contrasena:contrasena, estado:1}, function(error, result, fields){
        if(error){
            console.log(error);
        }else{
            res.redirect('/usuarios');
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
    
    conexion.query(`SELECT  nombres, apellidos, email, contrasena, estado FROM usuario WHERE id_usuario='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Actualizar-Usuario', {title:result})

        }     
        });
        
        
      
    })


    Router.post('/update/:id',(req, res)=>{ 
        const id= parseInt(req.params.id);
        const fk_rol2=parseInt(req.body.fk_rol2);
        const nombres=req.body.nombres;
        const apellidos=req.body.apellidos;
        const email=req.body.email;
        const contrasena=req.body.contrasena;
       
    
        conexion.query(`UPDATE usuario SET fk_rol2:${fk_rol2}, nombres:${nombres}, apellidos:${apellidos}, email:${email}, contrasena:${contrasena}, estado:1 WHERE id_usuario=${id}`, function(error, result, fields){
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