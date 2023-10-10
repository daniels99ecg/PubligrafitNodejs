const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');
const Swal =require('sweetalert2');


Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));
const compras=require('../../Controller/Compras/ComprasController')
const compra=new compras()

//Mostrar detalle de compra por ID
Router.get('/detalle/:idd', compra.mostrarComprasDetalle)
//Mostrar las compras filltradas por fecha
Router.get('/', compra.mostrarCompra)
//Buscar compra por ID
Router.post('/buscar/', compra.buscarCompra)
//Generar el reporte de compra
Router.get('/reporte', compra.reporteCompra)
//Crear Compra
Router.get('/create', compra.crearCompra)
//Guardar Compra
Router.post('/save', async (req, res)=>{

    const Proveedor=req.body.Proveedor;
    const Fecha=req.body.Fecha;
    const Cantidad=parseInt(req.body.Cantidad);
    const Total=parseFloat(req.body.Total);

    const iva=parseFloat(req.body.iva);
    const Precio=parseFloat(req.body.Precio);
    const subtotal=parseInt(req.body.subtotal);
    const Insumo=req.body.Insumo
   

    
        conexion.query(`INSERT INTO compras SET ?`, {proveedor:Proveedor, cantidad:Cantidad, fecha:Fecha, total:Total}, function(error, result, fields){
            if(error){
                console.log(error);
            }else{
            const id_compra = result.insertId;
                conexion.query(`INSERT INTO detalle_compra SET ?`, {fk_compra:id_compra, fk_insumo:Insumo, cantidad:Cantidad, precio:Precio, iva:iva, subtotal:subtotal}, function(error, result, fields){
                    if(error){
                        console.log(error);
                    }else{
                    
                        res.status(200).redirect('/compras')
                    }     
                    });
            }     
            });

            
      
})
module.exports=Router;