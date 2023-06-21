
const resUsuarios= require('./Usuarios.js');


function resApi(app){
    
    app.use('/usuarios', resUsuarios);
  

}

module.exports=resApi;
