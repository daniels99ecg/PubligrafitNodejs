const mysql= require('mysql2');

const conexion= mysql.createConnection({
    host: 'localhost',
    database: 'publigrafit',
    user: 'root',
    password:''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('conexion exitosa');
    }
})




module.exports=conexion;