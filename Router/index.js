
const resUsuarios= require('./Usuarios.js');
const resRol=require('./Rol.js');

function resApi(app){
    
    app.use('/usuarios', resUsuarios);
    app.use('/rol', resRol)

}

module.exports=resApi;
