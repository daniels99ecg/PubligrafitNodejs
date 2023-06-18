
const resSeleccionar= require('./seleccionar.js');


function resApi(app){
    
    app.use('/usuarios', resSeleccionar)
}

module.exports=resApi;