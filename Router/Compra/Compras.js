const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');
const Swal =require('sweetalert2');

Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));

Router.get('/detalle/:idd', (req, res) => {
    const idd = req.params.idd;
    conexion.query(`SELECT c.id_compra, i.id_insumo, c.fecha, i.nombre, c.proveedor, dc.cantidad, dc.precio, dc.iva, (dc.cantidad*dc.precio) AS subtotal, ROUND((dc.cantidad*dc.precio*dc.iva)+(dc.cantidad*dc.precio), 2) AS total FROM compras c, detalle_compra dc, insumos i WHERE dc.fk_compra=c.id_compra and dc.fk_insumo=i.id_insumo and c.id_compra='${idd}'`, function(error, result, fields) {
    if (error) {
        throw error
    } else {
        res.status(200).render('../View/Detalle-Compra', { title: result });
    }
    });
    
});

Router.get('/', (req, res)=>{

    conexion.query(`SELECT id_compra, DATE_FORMAT(fecha, '%d/%m/%y') AS fecha, total FROM compras` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Listar-Compras', {title:result})

        }     
        });
  
})

Router.post('/buscar/', (req, res)=>{
    const id=req.body.id;
    conexion.query(`SELECT id_compra, DATE_FORMAT(fecha, '%d/%m/%y') AS fecha, total FROM compras WHERE id_compra='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Compras-ListarBuscar', {title:result})

        }     
        });
  
})

//Generar el reporte
Router.get('/reporte', (req, res)=>{

    conexion.query(`SELECT c.id_compra, i.id_insumo, i.nombre, c.proveedor, dc.cantidad, dc.precio, dc.subtotal, dc.iva, c.total, c.fecha FROM compras c, detalle_compra dc, insumos i WHERE dc.fk_compra=c.id_compra and dc.fk_insumo=i.id_insumo INTO OUTFILE 'c:/Users/ACER/Desktop/ReporteCompras.xls';
    ` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            setTimeout(function(){
                res.redirect('/compras');
            },5000)

        }     
        });
  
})

Router.get('/create', (req, res)=>{
    //validacion 
    conexion.query(`SELECT id_insumo, nombre FROM insumos WHERE 1;
    ` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Registrar-Compras', {title : result});

        }     
        });
    
  
})


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


Router.get('/eliminar/:id', (req, res)=>{
const id= parseInt(req.params.id);

    conexion.query(`DELETE FROM compras WHERE id_compra='${id}'` , function(error, result, fields){
        if(error){
            console.log(error)
            
        }else{
            res.redirect('/compras');

        }     
        });
    
    
  
})

Router.get('/update/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    
    conexion.query(`SELECT id_compra, proveedor, cantidad, fecha, total FROM compras WHERE id_compra='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Actualizar-Compras', {title:result})

        }     
        });
        
        
      
    })


    Router.post('/update/in/',(req, res)=>{ 
        const id=parseInt(req.body.id);
      
        const fk_rol2=parseInt(req.body.fk_rol2);
        const nombres=req.body.nombres;
        const apellidos=req.body.apellidos;
        const email=req.body.email;
        const contrasena=req.body.contrasena;
       
    
        conexion.query(`UPDATE usuario SET fk_rol2=${fk_rol2}, nombres='${nombres}', apellidos='${apellidos}', email='${email}', contrasena='${contrasena}', estado=1 WHERE id_usuario='${id}'`, function(error, result, fields){
            if(error){
                console.log(error);
            }else{
                res.redirect('/usuarios');
            }     
            });
    })


    Router.get('/update', (req, res)=>{
        
             
                res.status(200).render('../View/Actualizar-Usuario')
    
            
          
        })
    
module.exports=Router;