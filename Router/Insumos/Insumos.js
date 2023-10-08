const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');
const Swal =require('sweetalert2');

const insumo=require('../../Controller/Insumos/insumosController')
const insumos=new insumo();
Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));

//Esto es para listar los insumos en la vista 
Router.get('/', insumos.listarInsumos)

//Generar el reporte
Router.get('/reporte', insumos.reporteInsumos)
// Esta linea es para mostrar el insumo en la vista
Router.get('/create', (req, res)=>{
    //validacion 
    res.status(200).render('../View/Registrar-Insumos');
  
})

//Esta linea es para guardar el insumo en la vista
Router.post('/save', insumos.guardarInsumos);

//Esta linea es para eliminar el insumo en la vista
Router.get('/eliminar/:id',insumos.eliminarInumos);
    
// Esta linea es para mostrar el insumo actualizado en la vista
Router.get('/update/:id', insumos.mostrarActualizadoInsumos);

//Esta linea es para actulaizar el insumo en la vistas
Router.post('/update/in/',insumos.actualizarInsumos)

//Esta linea es para mostrar el actualizar en la vista 
Router.get('/update', (req, res)=>{
        
             
        res.status(200).render('../View/Actualizar-Insumos')
    
            
          
        })
// Esta linea es para cambiar el estado del insumo en la vista    
Router.post('/cambiar/', insumos.estadoInsumos);


module.exports=Router;