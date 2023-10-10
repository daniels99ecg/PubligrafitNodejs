const conexion=require('../../database/db');

class comprasModule{

    async mostrarComprasDetalle(idd, callback){
        conexion.query(`SELECT c.id_compra, i.id_insumo, c.fecha, i.nombre, c.proveedor, dc.cantidad, dc.precio, dc.iva, (dc.cantidad*dc.precio) AS subtotal, ROUND((dc.cantidad*dc.precio*dc.iva)+(dc.cantidad*dc.precio), 2) AS total FROM compras c, detalle_compra dc, insumos i WHERE dc.fk_compra=c.id_compra and dc.fk_insumo=i.id_insumo and c.id_compra='${idd}'`, callback) 
    }

    async mostrarCompra (callback){
        conexion.query(`SELECT id_compra, DATE_FORMAT(fecha, '%d/%m/%y') AS fecha, total FROM compras` , callback)
    }

    async buscarCompra (id, callback){
        conexion.query(`SELECT id_compra, DATE_FORMAT(fecha, '%d/%m/%y') AS fecha, total FROM compras WHERE id_compra='${id}'` ,callback)
    }

    async reporteCompra (callback){
        conexion.query(`SELECT c.id_compra, i.id_insumo, i.nombre, c.proveedor, dc.cantidad, dc.precio, dc.subtotal, dc.iva, c.total, c.fecha FROM compras c, detalle_compra dc, insumos i WHERE dc.fk_compra=c.id_compra and dc.fk_insumo=i.id_insumo INTO OUTFILE 'c:/Users/ACER/Desktop/ReporteCompras.xls';` , callback)
    }

    async crearCompra (callback){
        conexion.query(`SELECT id_insumo, nombre FROM insumos WHERE estado=true;` , callback)
    }
}

module.exports=comprasModule;