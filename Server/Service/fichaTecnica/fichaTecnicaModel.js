const conexion=require('../../database/db');

class fichaTecnicaModel{
    async listarfichaTecnica(callback){
        conexion.query('SELECT ft.id_ft,i.nombre,ft.cantidad_insumo,ft.costo_insumo,ft.imagen_producto_final,ft.costo_final_producto, ft.detalle FROM ficha_tecnica ft, insumos i WHERE ft.fk_insumo=i.id_insumo',callback)
    }
    async crearfichaTecnica(callback){
        conexion.query('SELECT id_insumo, nombre FROM insumos WHERE estado=true' , callback)
    }
    async guardarfichaTecnica(insumo,cantidad_insumo,costo_insumo,imagen_producto_final,costo_final_producto,detalle,callback){
        conexion.query(`INSERT INTO ficha_tecnica SET ?`, {fk_insumo:insumo, cantidad_insumo:cantidad_insumo, costo_insumo:costo_insumo,imagen_producto_final:imagen_producto_final, costo_final_producto:costo_final_producto, detalle:detalle}, callback)

    }
    async elimnarfichaTecnica(id,callback) {
        conexion.query(`DELETE FROM ficha_tecnica WHERE id_ft='${id}'` , callback)
    }
    async mostrarfichaTecnicaActualizada(id,callback) {
        conexion.query(`SELECT id_ft,cantidad_insumo, costo_insumo,imagen_producto_final, costo_final_producto, detalle FROM ficha_tecnica WHERE id_ft='${id}'` , callback)

    }
    async actualizarfichaTecnica(id,insumo,cantidad_insumo,costo_insumo,imagen_producto_final,costo_final_producto,detalle,callback){
        conexion.query(`UPDATE ficha_tecnica SET fk_insumo=${insumo}, cantidad_insumo=${cantidad_insumo}, costo_insumo=${costo_insumo},imagen_producto_final='${imagen_producto_final}',costo_final_producto=${costo_final_producto},detalle ='${detalle}' WHERE id_ft='${id}'`,callback)
    }
}

module.exports = fichaTecnicaModel;
