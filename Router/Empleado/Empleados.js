const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');
const Swal =require('sweetalert2');

Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));


Router.get('/dashboard', (req, res)=>{
            res.status(200).render('../View/Empleado/dashboard2')   
})


Router.get('/insumos', (req, res)=>{

    conexion.query('SELECT*FROM insumos' , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Empleado/Listar-Insumos', {title:result})

        }     
        });
  
})

Router.get('/ficha', (req, res)=>{

    conexion.query('SELECT ft.id_ft,i.nombre,ft.cantidad_insumo,ft.costo_insumo,ft.imagen_producto_final,ft.costo_final_producto, ft.detalle FROM ficha_tecnica ft, insumos i WHERE ft.fk_insumo=i.id_insumo', function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Empleado/Listar-Ficha-Tecnica', {title:result})

        }     
        });   
})

Router.get('/venta', (req, res)=>{

    conexion.query(`SELECT id_venta, DATE_FORMAT(fecha, '%d/%m/%Y') AS fecha, total FROM venta` , function(error, result, fields){
    if(error){
            throw error;
        }else{
            res.status(200).render('../View/Empleado/Listar-Ventas', {title:result})

        }     
        });
    
})

Router.get('/detalle/:idd', (req, res) => {
    const idd = req.params.idd;
    conexion.query(`SELECT v.id_venta, c.dni_cliente, c.nombres, c.apellidos, v.tipo_comprobante, p.nombre_producto, p.precio, dv.cantidad, dv.iva, (dv.cantidad*p.precio) AS subtotal, ROUND((dv.cantidad*p.precio*dv.iva)+ (dv.cantidad*p.precio), 2) as total FROM venta v, detalle_venta dv, cliente c, producto p WHERE v.fk_dni_cliente=c.dni_cliente AND dv.fk_venta=v.id_venta AND dv.fk_producto=p.id_producto AND v.id_venta='${idd}'`, function(error, result, fields) {
    if (error) {
        throw error 
    } else {
        res.status(200).render('../View/Empleado/Detalle-Venta', { title: result });
    }
    });
    
});

Router.get('/compra', (req, res)=>{

    conexion.query(`SELECT id_compra, DATE_FORMAT(fecha, '%d/%m/%y') AS fecha, total FROM compras` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Empleado/Listar-Compras', {title:result})

        }     
        });
  
}) 

//Cliente
Router.get('/cliente', (req, res)=>{

    conexion.query('SELECT * FROM cliente WHERE 1' , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Empleado/Listar-Clientes', {title:result})

        }     
        });    
})


Router.get('/cliente/create', (req, res)=>{
    
    res.status(200).render('../View/Empleado/Registrar-Clientes');
  
})

Router.post('/cliente/save', async (req, res)=>{

    const dni = parseInt(req.body.dni);
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const email=req.body.email;   

     conexion.query(`INSERT INTO cliente SET ?`, {dni_cliente: dni, nombres: nombre, apellidos: apellido, telefono: telefono, direccion: direccion, email: email}, function(error, result, fields){
        if(error){
            console.log(error);
        }else{
            res.redirect('/clientes');
        }     
        });
})


Router.get('/cliente/reporte', (req, res)=>{

    conexion.query(`SELECT dni_cliente, nombres, apellidos, telefono, direccion, email FROM cliente INTO OUTFILE 'C:/Users/andre/OneDrive/Escritorio/ReporteClientes.xls'` , function(error, result, fields){
    if(error){
        throw error;
    }else{
        setTimeout(function(){
            res.redirect('/clientes');  
        },5000)

    }     
    });

})

Router.get('/cliente/update/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    
    conexion.query(`SELECT dni_cliente, nombres, apellidos, telefono, direccion, email FROM cliente WHERE dni_cliente='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Empleado/Actualizar-Clientes', {title:result})

        }     
        });
          
    })

Router.post('/cliente/update/in/',(req, res)=>{ 
   
    const dni = parseInt(req.body.dni);
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const email=req.body.email;   
       
    conexion.query(`UPDATE cliente SET dni_cliente=${dni}, nombres='${nombre}', apellidos='${apellido}', telefono='${telefono}', direccion='${direccion}', email='${email}' WHERE dni_cliente='${dni}'`, function(error, result, fields){
    if(error){
        console.log(error);
    }else{
        res.redirect('/clientes');
    }     
    });
})

    Router.get('/venta/update', (req, res)=>{
             
        res.status(200).render('../View/Empleado/Actualizar-Clientes')
         
    })


    Router.get('/venta/create', (req, res)=>{
    
        conexion.query('SELECT id_producto, nombre_producto, precio FROM producto WHERE 1' , function(error, result, fields){
            if(error){
                    throw error;
                }else{
                    res.status(200).render('../View/Empleado/Registrar-Ventas', {title:result});
        
                }     
                });
    })
    
    Router.post('/venta/save', async (req, res)=>{
    
        const cliente = parseInt(req.body.cliente);
        const comprobante = req.body.comprobante;
        const fecha = req.body.fecha;
        const total = parseFloat(req.body.total);
        const producto = parseInt(req.body.producto);
        const precio = parseInt(req.body.precio);
        const cantidad = parseInt(req.body.cantidad);
        const iva = parseFloat(req.body.iva);
        const subtotal=parseInt(req.body.subtotal);
       
        conexion.query(`INSERT INTO venta SET ?`, {fk_dni_cliente: cliente, tipo_comprobante: comprobante, fecha: fecha, total: total}, function(error, result, fields){
            if(error){
                console.log(error);
                
            }else{
                const id_venta=result.insertId;
                conexion.query(`INSERT INTO detalle_venta SET ?`, {fk_venta: id_venta, fk_producto: producto, cantidad: cantidad, precio: precio, iva: iva, subtotal: subtotal}, function(error, result2, fields){
                    if(error){
                        console.log(error);
            
                    }else{
                        res.redirect('/empleado/venta');
                       
                }     
            }); 
        }     
          
    });
})

module.exports=Router;