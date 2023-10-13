
const Usuarios=require('../../Service/Usuario/UsuariosModelo');
const usuarios=new Usuarios();


class UsuarioController{

    async buscarUsuario(req, res){
        usuarios.getUsuario((error, result) => {
            if (error) {
              throw error;
            } else {
            //   res.status(200).render('../View/Listar-Usuarios', { title: result });

            res.status(200).send(result)
            }
        })
    }


    async buscadorDeUsuarios(req, res){
        const id=req.body.id;

        usuarios.Buscar(id, (error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Usuario-ListarBuscar', {title:result})
    
            }     
            });
    }

    async generadorReporte(req, res){

        usuarios.Reporte((error, result)=>{
            if(error){
                throw error;
            }else{
                res.redirect('/usuarios');
    
            }     
            });
    }

    async crearUsuarios(req, res){
        usuarios.Crear((error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Registrar-Usuarios', {title:result});
    
            }     
            });
    }

    async guardarUsuario(req, res){
        const fk_rol2=parseInt(req.body.fk_rol2);
        const nombres=req.body.nombres;
        const apellidos=req.body.apellidos;
        const email=req.body.email;
        const contrasena=req.body.contrasena;
        usuarios.save(fk_rol2, nombres, apellidos, email, contrasena,(error, result)=>{
            if(error){
                console.log(error);
            }else{
             
                // res.redirect('/usuarios');
                res.status(200).send('Usuario creado con exito')

            }     
            });
    }

    async eliminarUsuario(req, res){
        const id= parseInt(req.params.id);

        usuarios.Delete(id,(error, result)=>{
            if(error){
                console.log(error)
                
            }else{
                res.redirect('/usuarios');
        
            }     
            });
    }

    async mostrarActulizar(req, res){
        const id= parseInt(req.params.id);

        usuarios.updateMostrar(id,(error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Actualizar-Usuario', {title:result})
    
            }  
        });
    }

    async actualizar(req, res){
        const id=parseInt(req.body.id);
      
        const fk_rol2=parseInt(req.body.fk_rol2);
        const nombres=req.body.nombres;
        const apellidos=req.body.apellidos;
        const email=req.body.email;
        const contrasena=req.body.contrasena;

        usuarios.update(id,fk_rol2,nombres,apellidos,email,contrasena,(error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/usuarios');
            } 
        })
       
    }

async cambiarEstadoUsuario(req, res){
    const algo=req.body.nuevoEstado
    const id=req.body.productoId;
usuarios.cambiarEstado(algo,id,(error, result)=>{
    if(error){
        console.log(error);
    }else{
        res.redirect('/usuarios');
    } 
})
   
}

}

module.exports=UsuarioController;