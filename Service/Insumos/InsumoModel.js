const conexion=require('../../database/db');


class insumosModel{

    async ListarInsumo(callback){
        conexion.query('SELECT*FROM insumos', callback)
    }


}

module.exports=insumosModel;