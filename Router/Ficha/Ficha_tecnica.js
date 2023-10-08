const express=require('express')
const Router=express.Router()
const conexion=require('../../database/db');
const path=require('path');
const Swal =require('sweetalert2');

Router.use(express.static('public'));
Router.use(express.static(path.join(__dirname, 'public')));


const fichaTecnica=require('../../Controller/fichaTecnica/fichaTecnicaController');
const fichaTecnicas=new fichaTecnica()
// Esta lista es para mostrar el listar en la vista
Router.get('/',fichaTecnicas.listarfichaTecnica );
// Esta linea es para crear una ficha tecnica en la vista
Router.get('/create', fichaTecnicas.crearfichaTecnica)
// Esta linea es para guardar la ficha tecnica en la vista
Router.post('/save', fichaTecnicas.guardarfichaTecnica)
// Esta linea es para eliminar la ficha tecnica en la vista
Router.get('/eliminar/:id', fichaTecnicas.eliminarfichaTecnica);
// Esta linea es para mostrar la ficha tecnica actualizda en la vista
Router.get('/update/:id', fichaTecnicas.mostrarfichaTecnicaActualizada)
// Esta linea es para actualizar el ficha tecnica en la vista
Router.post('/update/in/',fichaTecnicas.actualizarfichaTecnica)
//Esta linea es para mostrar el actualizar en la vista 
Router.get('/update', (req, res)=>{         
    res.status(200).render('../View/Actualizar-Ficha-Tecnica')
})   
module.exports=Router;