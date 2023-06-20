
const resSeleccionar= require('./Usuarios.js');


function resApi(app){
    
    app.use('/usuarios', resSeleccionar);
   

}

module.exports=resApi;