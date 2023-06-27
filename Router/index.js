
const resUsuarios= require('./Usuarios.js');
const resRol=require('./Rol.js');

const resInsumos=require('./Insumos.js');

const resProducto= require('./producto.js');
const resFicha_tecnica= require('./Ficha_tecnica.js');
function resApi(app){
    
    app.use('/usuarios', resUsuarios);
    app.use('/rol', resRol);
    app.use('/insumos', resInsumos);
    app.use('/producto', resProducto);
    app.use('/ficha_tecnica', resFicha_tecnica);
   

}

module.exports=resApi;
