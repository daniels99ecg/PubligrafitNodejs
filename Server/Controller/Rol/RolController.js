const Rol = require('../../Service/Roles/RolModel');
const rol=require('../../Service/Roles/RolModel')

const Roles=new rol();

class rolController{


    async mostrarRoles(req, res){
        Roles.getRol((error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Listar-Roles', {title:result})
    
            } 
        })
    }


    async BuscarRoles(req, res){
        const id=req.body.id;
        Roles.buscadorRoles(id,(error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Rol-listarBuscar', {title:result})
    
            }  
        })
    }

    async guardarRoles(req, res){
        const nombre=req.body.nombre;
        const fecha=req.body.fecha;
        Roles.guardarRoles(nombre,fecha,(error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/rol');
            }   
        })
    }

    async Eliminar(req, res){
        const id= parseInt(req.params.id);
        Roles.Eliminar(id,(error, result)=>{
            if(error){
                console.log(error)
                
            }else{
                res.redirect('/rol');
    
            } 
        })
    }


    async Update(req, res){
        const id=parseInt(req.params.id);
        Roles.Update(id,(error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Actualizar-Roles', {title:result})
            } 
        })
    }

    async UpdateGuardar(req, res){
        const id=parseInt(req.body.id);
      
        const fk_rol2=parseInt(req.body.fk_rol2);
        const nombres=req.body.nombres;
        const apellidos=req.body.apellidos;
        const email=req.body.email;
        const contrasena=req.body.contrasena;
       
        Roles.updateGuardar(id,fk_rol2,nombres,apellidos,email,contrasena,(error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/usuarios');
            } 
        })
       
    }

    async asignarRoles(req, res){
        Roles.asignarRoles((error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Asignar-Roles', {title:result})
    
            }  
        })
    }

    async asignarRolGuardar(req, res){
        const rol=req.body.rol;
        const permiso=req.body.permiso;
        Roles.asignarRolGuardar(rol,permiso,(error, result)=>{
            if(error){
                console.log(error);
            }else{
             
                res.redirect('/rol/asignar');
            }  
        })
    }
}

module.exports=rolController;