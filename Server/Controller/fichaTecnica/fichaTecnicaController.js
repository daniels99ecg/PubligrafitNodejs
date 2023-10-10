const fichaTecnica=require('../../Service/fichaTecnica/fichaTecnicaModel');
const fichaTecnicas=new fichaTecnica()

class fichaTecnicaController{
    async listarfichaTecnica(req, res){
        fichaTecnicas.listarfichaTecnica((error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Listar-Ficha-Tecnica', {title:result})
    
            }
        })
    }
    async crearfichaTecnica(req, res){
        fichaTecnicas.crearfichaTecnica((error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Registrar-Ficha-Tecnica', {title:result});
    
            }
        })
    }
    async guardarfichaTecnica(req, res){
        const insumo=parseInt(req.body.insumo);
        const cantidad_insumo=parseInt(req.body.cantidad_insumo);
        const costo_insumo=parseFloat(req.body.cantidad_insumo);
        const imagen_producto_final=(req.body.imagen_producto_final);
        const costo_final_producto=parseFloat(req.body.costo_final_producto);
        const detalle=(req.body.detalle);
        fichaTecnicas.guardarfichaTecnica(insumo,cantidad_insumo,costo_insumo,imagen_producto_final,costo_final_producto,detalle,(error, result)=>{
            if(error){
                console.log(error);
            }else{
             
                res.redirect('/ficha_tecnica');
            }  
        })
    }
    async eliminarfichaTecnica(req, res){
        const id= parseInt(req.params.id);
        fichaTecnicas.elimnarfichaTecnica(id,(error, result)=>{
            if(error){
                console.log(error)
                
            }else{
                res.redirect('/ficha_tecnica')
    
            }
        })
    }
    async mostrarfichaTecnicaActualizada(req, res){
        const id= req.params.id;
        fichaTecnicas.mostrarfichaTecnicaActualizada(id,(error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Actualizar-Ficha-Tecnica', {title:result})
    
            }
        })
    }
    async actualizarfichaTecnica(req, res){
        const id=parseInt(req.body.id);
        const insumo=(req.body.insumo);
        const cantidad_insumo=parseInt(req.body.cantidad_insumo);
        const costo_insumo=parseFloat(req.body.costo_insumo);
        const imagen_producto_final=req.body.imagen_producto_final;
        const costo_final_producto=parseFloat(req.body.costo_final_producto);
        const detalle=(req.body.detalle)
        fichaTecnicas.actualizarfichaTecnica(id,insumo,cantidad_insumo,costo_insumo,imagen_producto_final,costo_final_producto,detalle,(error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/ficha_tecnica');
            }       
        })
    }
}

module.exports =fichaTecnicaController;

