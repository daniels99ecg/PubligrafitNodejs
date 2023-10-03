const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');
const Swal =require('sweetalert2');

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


Router.post('/buscar/', (req, res)=>{
    const id=req.body.id;
    conexion.query(`SELECT u.id_usuario, u.nombres, u.apellidos, u.email, u.contrasena, r.nombre_rol FROM usuario u, rol r WHERE u.fk_rol2=r.id_rol and u.nombres='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Usuario-ListarBuscar', {title:result})

        }     
        });
  
})

//Generar el reporte
Router.get('/reporte', (req, res)=>{

    conexion.query(`SELECT u.id_usuario, u.nombres, u.apellidos, u.email, u.contrasena, r.nombre_rol FROM usuario u, rol r WHERE u.fk_rol2=r.id_rol INTO OUTFILE 'C:/Users/emi--/OneDrive/Escritorio/reporte.xls' ` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.redirect('/usuarios');

        }     
        });
  
})


//
Router.get('/create', (req, res)=>{
    //validacion 

    conexion.query(`SELECT id_rol, nombre_rol FROM rol WHERE 1 ` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Registrar-Usuarios', {title:result});

        }     
        });
  
  
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


 Router.post('/cambiar/', (req, res)=>{

    const algo=req.body.nuevoEstado
    const id=req.body.productoId;
    conexion.query(`UPDATE usuario SET estado=${algo} WHERE id_usuario='${id}'`, function(error, result, fields){
        if(error){
            console.log(error);
        }else{
            res.redirect('/usuarios');
        }     
        });
 });
 
 
    
module.exports=Router;