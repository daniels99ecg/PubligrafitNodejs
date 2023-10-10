const cliente=require('../../Service/Cliente/clienteModel')
const Clientes=new cliente()

class ClienteController{

async mostrarCliente(req, res){
    Clientes.mostrarClientes((error, result)=>{
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Listar-Clientes', {title:result})

        }   
    })
}

}

module.exports=ClienteController;