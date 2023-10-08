const insumos=require('../../Service/Insumos/InsumoModel')
const insumo=new insumos()

class insumosController{

  async listarInsumos(req, res){
        insumo.listarInsumo((error, result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).render('../View/Listar-Insumos', {title:result})
    
            } 
        })
  }
    


}
module.exports=insumosController;