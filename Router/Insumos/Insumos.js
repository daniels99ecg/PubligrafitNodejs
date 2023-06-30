const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');
const Swal =require('sweetalert2');

Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));


Router.get('/', (req, res)=>{

    conexion.query('SELECT*FROM insumos' , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Listar-Insumos', {title:result})

        }     
        });
  
})

Router.post('/buscar/', (req, res)=>{
    const id=req.body.id;
    conexion.query(`SELECT*FROM insumos WHERE id_insumo='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/insumos-ListarBuscar', {title:result})

        }     
        });
  
})


//Generar el reporte
Router.get('/reporte', (req, res)=>{

    conexion.query(` SELECT*FROM insumos INTO OUTFILE 'c:/Users/HOME/Desktop/reportes.xls'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.redirect('/insumos');

        }     
        });
  
})

Router.get('/create', (req, res)=>{
    //validacion 

    res.status(200).render('../View/Registrar-Insumos');
  
})


Router.post('/save', async (req, res)=>{

    const nombre=req.body.nombre;
    const cantidad=parseInt(req.body.cantidad);
    const precio=parseFloat(req.body.precio);
    

        conexion.query(`INSERT INTO insumos SET ?`, {nombre:nombre,precio:precio,cantidad:cantidad}, function(error, result, fields){
            if(error){
                console.log(error);
            }else{
             
                res.redirect('/insumos');
            }     
            });
      
})


Router.get('/eliminar/:id', (req, res)=>{
const id= parseInt(req.params.id);

    conexion.query(`DELETE FROM insumos WHERE id_insumo='${id}'` , function(error, result, fields){
        if(error){
            console.log(error)
            
        }else{
            res.redirect('/insumos');

        }     
        });
    
    
  
})

Router.get('/update/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    
    conexion.query(`SELECT id_insumo, nombre, precio, cantidad  FROM insumos WHERE id_insumo='${id}'` , function(error, result, fields){
        if(error){
            throw error;
        }else{
            res.status(200).render('../View/Actualizar-Insumos', {title:result})

        }     
        });
        
        
      
    })


    Router.post('/update/in/',(req, res)=>{ 
        const id=parseInt(req.body.id);
        const nombre=req.body.nombre;
        const cantidad=parseInt(req.body.cantidad);
        const precio=parseFloat(req.body.precio);
       
    
        conexion.query(`UPDATE insumos SET nombre='${nombre}', precio=${precio}, cantidad=${cantidad} WHERE id_insumo='${id}'`, function(error, result, fields){
            if(error){
                console.log(error);
            }else{
                res.redirect('/insumos');
            }     
            });
    })


    Router.get('/update', (req, res)=>{
        
             
                res.status(200).render('../View/Actualizar-Insumos')
    
            
          
        })
    
module.exports=Router;