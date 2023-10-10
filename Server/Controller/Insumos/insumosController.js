const insumos=require('../../Service/Insumos/InsumosModel')
const insumo=new insumos()

class insumosController{
    async listarInsumos(req, res){
        insumo.listarInsumos((error,result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Listar-Insumos', {title:result})
            }     
        })
    }
    async buscarInsumos(req, res){
        const id=req.body.id;
        insumo.buscarInsumos(id,(error,result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/insumos-ListarBuscar', {title:result})
    
            } 
        })
    }
    async reporteInsumos(req, res){
        insumo.reporteInsumos((error,result)=>{
            if(error){
                throw error;
            }else{
                res.redirect('/insumos');
    
            }  
        })
    }
    async guardarInsumos(req, res){
        const nombre=req.body.nombre;
        const cantidad=parseInt(req.body.cantidad);
        const precio=parseFloat(req.body.precio);
        
        insumo.guardarInsumos(nombre,cantidad,precio,(error,result)=>{
            if(error){
                console.log(error);
            }else{
             
                res.redirect('/insumos');
            }  
        })
    }
    async eliminarInumos(req, res){
        const id= parseInt(req.params.id);

        insumo.eliminarInumos(id,(error,result)=>{
            if(error){
                console.log(error)
                
            }else{
                res.redirect('/insumos');
    
            } 
        })
    }
    async mostrarActualizadoInsumos(req, res) {
        const id= parseInt(req.params.id);

        insumo.mostrarActualizadoInsumos(id,(error,result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Actualizar-Insumos', {title:result})
    
            }
        })
    }
    async actualizarInsumos(req, res) {
        const id=parseInt(req.body.id);
        const nombre=req.body.nombre;
        const cantidad=parseInt(req.body.cantidad);
        const precio=parseFloat(req.body.precio);

        insumo.actualizarInsumos(id,nombre,cantidad,precio,(error,result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/insumos');
            }  
        })
    }
    async estadoInsumos(req, res) {
        const algo=req.body.nuevoEstado;
        const id=req.body.productoId;

        insumo.estadoInsumos(algo,id,(error,result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/insumos');
            } 
        })
    }
}

module.exports =insumosController;
