const mysql= require('mysql2');

const conexion= mysql.createConnection({
    host: 'mysql-daniels99.alwaysdata.net',
    database: 'daniels99_publigrafit',
    user: 'daniels99',
    password:'1036134760'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('conexion exitosa');
    }
})




module.exports=conexion;