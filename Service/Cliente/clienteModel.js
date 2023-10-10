const conexion=require('../../database/db');

class Cliente{

    async mostrarClientes(callback){
        conexion.query('SELECT * FROM cliente WHERE 1' , callback)
    }

}

module.exports=Cliente;