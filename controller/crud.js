const conexion=require('../database/db');

exports.save=(res, req)=>{

   

        const fk_rol2=req.body.fk_rol2;
        const nombres=req.body.nombres;
        const apellidos=req.body.apellidos;
        const email=req.body.email;
        const contrasena=req.body.contrasena;
       
    
        conexion.query(`INSERT INTO usuario SET ?`, {fk_rol2:fk_rol2, nombres:nombres, apellidos:apellidos, email:email, contrasena:contrasena, estado:1}, function(error, result, fields){
            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }     
            });
    }
