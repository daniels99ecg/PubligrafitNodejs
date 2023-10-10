const conexion=require('../../database/db');


class insumosModel{
    async listarInsumos(callback){
        conexion.query('SELECT*FROM insumos' ,callback)
    }
    async buscarInsumos(id,callback){
        conexion.query(`SELECT*FROM insumos WHERE id_insumo='${id}'`, callback)
    }
    async reporteInsumos(callback){
        conexion.query(`SELECT*FROM insumos INTO OUTFILE 'c:/Users/HOME/Desktop/reportes.xls'` , callback)
    }
    async guardarInsumos(nombre,precio,cantidad,callback){
        conexion.query(`INSERT INTO insumos SET ?`, {nombre:nombre,precio:precio,cantidad:cantidad},callback)
    }
    async eliminarInumos(id,callback) {
        conexion.query(`DELETE FROM insumos WHERE id_insumo='${id}'` ,callback)
    }
    async mostrarActualizadoInsumos(id,callback) {
        conexion.query(`SELECT id_insumo, nombre, precio, cantidad  FROM insumos WHERE id_insumo='${id}'` , callback)
    }
    async actualizarInsumos(id,nombre,cantidad,precio,callback) {
        conexion.query(`UPDATE insumos SET nombre='${nombre}', precio=${precio}, cantidad=${cantidad} WHERE id_insumo='${id}'`, callback)
    }
    async estadoInsumos(algo,id,callback) {
        conexion.query(`UPDATE insumos SET estado=${algo} WHERE id_insumo='${id}'`, callback)
    }
}
module.exports = insumosModel;