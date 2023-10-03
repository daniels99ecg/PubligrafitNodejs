const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');
const Swal =require('sweetalert2');

Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));




Router.get('/', (req, res)=>{

    conexion.query('SELECT ft.id_ft,i.nombre,ft.cantidad_insumo,ft.costo_insumo,ft.imagen_producto_final,ft.costo_final_producto, ft.detalle FROM ficha_tecnica ft, insumos i WHERE ft.fk_insumo=i.id_insumo', function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Listar-Ficha-Tecnica', {title:result})

        }     
        });
    
    
  
})


Router.get('/create', (req, res)=>{
    
    conexion.query('SELECT id_insumo, nombre FROM insumos WHERE estado=true' , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Registrar-Ficha-Tecnica', {title:result});

        }     
        });

    

})



Router.post('/save', async (req, res)=>{
    const insumo=parseInt(req.body.insumo);
    const cantidad_insumo=parseInt(req.body.cantidad_insumo);
    const costo_insumo=parseFloat(req.body.cantidad_insumo);
    const imagen_producto_final=(req.body.imagen_producto_final);
    const costo_final_producto=parseFloat(req.body.costo_final_producto);
    const detalle=(req.body.detalle);
    
   

    conexion.query(`INSERT INTO ficha_tecnica SET ?`, {fk_insumo:insumo, cantidad_insumo:cantidad_insumo, costo_insumo:costo_insumo,imagen_producto_final:imagen_producto_final, costo_final_producto:costo_final_producto, detalle:detalle}, function(error, result, fields){
        if(error){
            console.log(error);
        }else{
         
            res.redirect('/ficha_tecnica');
        }     
        });
    


    
})


Router.get('/eliminar/:id', (req, res)=>{
const id= parseInt(req.params.id);

    conexion.query(`DELETE FROM ficha_tecnica WHERE id_ft='${id}'` , function(error, result, fields){
        if(error){
            console.log(error)
            
        }else{
            res.redirect('/ficha_tecnica');

        }     
        });
    
    
  
})

Router.get('/update/:id', (req, res)=>{
    const id= req.params.id;
    
    conexion.query(`SELECT id_ft,cantidad_insumo, costo_insumo,imagen_producto_final, costo_final_producto, detalle FROM ficha_tecnica WHERE id_ft='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Actualizar-Ficha-Tecnica', {title:result})

        }     
        });
        
        
      
    })


    Router.post('/update/in/',(req, res)=>{ 
        const id=parseInt(req.body.id);
      
        const insumo=(req.body.insumo);
        const cantidad_insumo=parseInt(req.body.cantidad_insumo);
        const costo_insumo=parseFloat(req.body.costo_insumo);
        const imagen_producto_final=req.body.imagen_producto_final;
        const costo_final_producto=parseFloat(req.body.costo_final_producto);
        const detalle=(req.body.detalle);
    
        
    
        conexion.query(`UPDATE ficha_tecnica SET fk_insumo=${insumo}, cantidad_insumo=${cantidad_insumo}, costo_insumo=${costo_insumo},imagen_producto_final='${imagen_producto_final}',costo_final_producto=${costo_final_producto},detalle ='${detalle}' WHERE id_ft='${id}'`,function(error, result, fields){
            if(error){
                console.log(error);
            }else{
                res.redirect('/ficha_tecnica');
            }     
            });
    })


    Router.get('/update', (req, res)=>{
        
             
                res.status(200).render('../View/Actualizar-Ficha-Tecnica')
    
            
          
        })
    
module.exports=Router;