const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');

Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));


Router.get('/', (req, res)=>{

    conexion.query(`SELECT id_venta, DATE_FORMAT(fecha, '%d/%m/%Y') AS fecha, total FROM venta` , function(error, result, fields){
    if(error){
            throw error;
        }else{
            res.status(200).render('../View/Listar-Ventas', {title:result})

        }     
        });
    
})

Router.get('/detalle/:idd', (req, res) => {
    const idd = req.params.idd;
    conexion.query(`SELECT v.id_venta, c.dni_cliente, c.nombres, c.apellidos, v.tipo_comprobante, p.nombre_producto, p.precio, dv.cantidad, dv.iva, (dv.cantidad*p.precio) AS subtotal, ROUND((dv.cantidad*p.precio*dv.iva)+ (dv.cantidad*p.precio), 2) as total FROM venta v, detalle_venta dv, cliente c, producto p WHERE v.fk_dni_cliente=c.dni_cliente AND dv.fk_venta=v.id_venta AND dv.fk_producto=p.id_producto AND v.id_venta='${idd}'`, function(error, result, fields) {
    if (error) {
        throw error
    } else {
        res.status(200).render('../View/Detalle-Venta', { title: result });
    }
    });
    
});

Router.post('/searching/', (req, res) => {
    const id = req.body.id;
    conexion.query(`SELECT id_venta, DATE_FORMAT(fecha, '%d/%m/%Y') AS fecha, total FROM venta WHERE fk_dni_cliente='${id}'`, function(error, result, fields) {
    if (error) {
        throw error
    } else {
        res.status(200).render('../View/Ventas-Searching', { title: result });
    }
    });
    
});

Router.get('/reporte', (req, res)=>{

    conexion.query(`SELECT v.id_venta, DATE_FORMAT(fecha, '%d/%m/%Y') AS fecha, c.dni_cliente, c.nombres, c.apellidos, v.tipo_comprobante, v.fecha, p.nombre_producto, p.precio, dv.cantidad, dv.iva, (dv.cantidad*p.precio) subtotal, (dv.cantidad*p.precio*dv.iva+subtotal)total FROM venta v, detalle_venta dv, cliente c, producto p WHERE v.fk_dni_cliente=c.dni_cliente and v.id_venta=dv.fk_venta and dv.fk_producto=p.id_producto INTO OUTFILE 'C:/Users/andre/OneDrive/Escritorio/ReporteVentas.xls' ` , function(error, result, fields){
    if(error){
        throw error;
    }else{
        setTimeout(function(){
            res.redirect('/ventas');
        },5000)

    }     
    });

})

Router.get('/create', (req, res)=>{
    
    conexion.query('SELECT id_producto, nombre_producto, precio FROM producto WHERE estado=true' , function(error, result, fields){
        if(error){
                throw error;
            }else{
                res.status(200).render('../View/Registrar-Ventas', {title:result});
    
            }     
            });
})

Router.post('/save', async (req, res)=>{

    const cliente = parseInt(req.body.cliente);
    const comprobante = req.body.comprobante;
    const fecha = req.body.fecha;
    const total = parseFloat(req.body.total);
    const producto = parseInt(req.body.producto);
    const precio = parseInt(req.body.precio);
    const cantidad = parseInt(req.body.cantidad);
    const iva = parseFloat(req.body.iva);
    const subtotal=parseInt(req.body.subtotal)
   
    conexion.query(`INSERT INTO venta SET ?`, {fk_dni_cliente: cliente, tipo_comprobante: comprobante, fecha: fecha, total: total}, function(error, result, fields){
        if(error){
            console.log(error);
            
        }else{
            const id_venta=result.insertId;
            conexion.query(`INSERT INTO detalle_venta SET ?`, {fk_venta: id_venta, fk_producto: producto, cantidad: cantidad, precio: precio, iva: iva, subtotal: subtotal}, function(error, result2, fields){
                if(error){
                    console.log(error);
        
                }else{
                    res.redirect('/ventas');
                   
            }     
        }); 
    }     
      
});

// Router.get('/eventos', (req, res) => {
//     const fechaInicio = req.query.fechaInicio; // Ejemplo de fecha de inicio en formato 'YYYY-MM-DD'

//     const sql = `SELECT * FROM ventas WHERE fecha BETWEEN ? AND ?`;
//     conexion.query(sql, [fechaInicio], (err, results) => {
//       if (err) {
//         console.error('Error al ejecutar la consulta');
//       }else{
//         // Procesa los resultados como desees
//         res.render(results);
//     }

//     });
// });
              
// Venta

})

Router.get('/eliminar/:id', (req, res)=>{
const id= parseInt(req.params.id);

    conexion.query(`DELETE FROM venta WHERE id_venta='${id}'` , function(error, result, fields){
        if(error){
            console.log(error)
            
        }else{
            res.redirect('/ventas');

        }     
        });   
})

Router.get('/eliminar/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    
        conexion.query(`DELETE FROM venta WHERE id_venta='${id}'` , function(error, result, fields){
            if(error){
                console.log(error)
                
            }else{
                res.redirect('/ventas');
    
            }     
            });
        
    })
   
module.exports=Router;