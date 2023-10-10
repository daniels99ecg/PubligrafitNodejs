const compra=require('../../Service/Compras/ComprasModule')
const compras=new compra()

class comprasController{

    async mostrarComprasDetalle(req, res){
    const idd = req.params.idd;
    compras.mostrarComprasDetalle(idd,(error, result)=>{
        if (error) {
            throw error
        } else {
            res.status(200).render('../View/Detalle-Compra', { title: result });
        }
    })
}

    async mostrarCompra(req, res){
    compras.mostrarCompra((error, result) =>{
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Listar-Compras', {title:result})
    
        }   
    })
}

    async buscarCompra(req, res){
    const id=req.body.id;
    compras.buscarCompra(id, (error, result) =>{
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Compras-ListarBuscar', {title:result})

        }   
    })
}

    async reporteCompra(req, res){
    compras.reporteCompra((error, result) =>{
        if(error){
            throw error;
        }else{
            setTimeout(function(){
                res.redirect('/compras');
            },5000)

        }     
    })
}

    async crearCompra(req, res){
    compras.crearCompra((error, result) =>{
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Registrar-Compras', {title : result});

        }    
    })
}
}

module.exports=comprasController;