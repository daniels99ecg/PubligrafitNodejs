const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');
const Swal =require('sweetalert2');

Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));

Router.post('/buscar/', (req, res) => {
    const id = req.body.id;
    conexion.query(`SELECT ft.id_ft,i.nombre,ft.cantidad_insumo,ft.costo_insumo,ft.imagen_producto_final,ft.costo_final_producto, ft.detalle FROM ficha_tecnica ft, insumos i WHERE ft.fk_insumo=i.id_insumo and id_ft='${id}'`, function(error, result, fields) {
    if (error) {
        throw error
    } else {
        res.status(200).render('../View/FichaTecnica-Buscar', { title: result });
    }
    });
    
});

Router.post('/buscar/', (req, res) => {
    const id = req.body.id;
    conexion.query(`SELECT pro.id_producto,pro.nombre_producto, pro.precio ,pro.imagen, pro.cantidad_producto, pro.stock, cate.categoria FROM producto pro, categoria cate WHERE pro.fk_Categoria=cate.id_Categoria and id_producto='${id}'`, function(error, result, fields) {
    if (error) {
        throw error
    } else {
        res.status(200).render('../View/Productos-buscar', { title: result });
    }
    });
    
});

Router.get('/reporte', (req, res)=>{

    conexion.query(`SELECT ft.id_ft,i.nombre,ft.cantidad_insumo,ft.costo_insumo,ft.imagen_producto_final,ft.costo_final_producto, ft.detalle FROM ficha_tecnica ft, insumos i WHERE ft.fk_insumo=i.id_insumo INTO OUTFILE 'C:/Users/123/Desktop/camilo_vali/ReporteProducto.xls'` , function(error, result, fields){
    if(error){
        throw error;
    }else{
        setTimeout(function(){
            res.redirect('/producto');
        },5000)

    }     
    });

})

Router.get('/', (req, res)=>{

    conexion.query('SELECT pro.id_producto,pro.nombre_producto, pro.precio ,pro.imagen, pro.cantidad_producto, pro.stock, cate.categoria FROM producto pro, categoria cate WHERE pro.fk_Categoria=cate.id_Categoria' , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Listar-Productos', {title:result})

        }     
        });
    
    
  
})


Router.get('/create', (req, res)=>{
    //validacion 


   


    res.status(200).render('../View/Registrar-Productos');

  
})



Router.post('/save', async (req, res)=>{
    const categoria=parseInt(req.body.categoria);
    const producto=req.body.producto;
    const precio=parseFloat(req.body.precio);
    const imagen=req.body.imagen;
    const cantidad=parseInt(req.body.cantidad);
    const stock=parseInt(req.body.stock);
    
   

    conexion.query(`INSERT INTO producto SET ?`, {fk_categoria:categoria, nombre_producto:producto, precio:precio,imagen:imagen, cantidad_producto:cantidad, stock:stock,estado:1}, function(error, result, fields){
        if(error){
            console.log(error);
        }else{
         
            res.redirect('/producto');
        }     
        });
    


    
})


Router.get('/eliminar/:id', (req, res)=>{
const id= parseInt(req.params.id);

    conexion.query(`DELETE FROM producto WHERE id_producto='${id}'` , function(error, result, fields){
        if(error){
            console.log(error)
            
        }else{
            res.redirect('/producto');

        }     
        });
    
    
  
})

Router.get('/update/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    
    conexion.query(`SELECT id_producto, nombre_producto, precio ,imagen, cantidad_producto, stock FROM producto WHERE id_producto='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Actualizar-Productos', {title:result})

        }     
        });
        
        
      
    })


    Router.post('/update/in/',(req, res)=>{ 
        const id=parseInt(req.body.id);
      
        const producto=req.body.producto;
        const precio=parseFloat(req.body.precio);
        const imagen=req.body.imagen;
        const cantidad=parseInt(req.body.cantidad);
        const stock=parseInt(req.body.stock);
        const categoria=(req.body.categoria);
        
    
        conexion.query(`UPDATE producto SET fk_categoria=${categoria}, nombre_producto='${producto}', precio=${precio},imagen='${imagen}', cantidad_producto=${cantidad}, stock=${stock} WHERE id_producto='${id}'`,function(error, result, fields){
            if(error){
                console.log(error);
            }else{
                res.redirect('/producto');
            }     
            });
    })


    Router.get('/update', (req, res)=>{
        
             
                res.status(200).render('../View/Actualizar-Productos')
    
            
          
        })
    
module.exports=Router;