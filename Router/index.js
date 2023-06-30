
const resUsuarios= require('./Usuarios/Usuarios.js');
const resRol=require('./Rol/Rol.js');

const resInsumos=require('./Insumos/Insumos.js');

const resProducto= require('./Producto/producto.js');
const resFicha_tecnica= require('./Ficha/Ficha_tecnica.js');
const resEmpleado=require('./Empleado/Empleados.js');


const resCompras= require('./Compra/Compras.js');
const resVentas = require('./Ventas/ventas.js');
const resClientes = require('./Clientes/clientes.js');

function resApi(app){
    
    app.use('/usuarios', resUsuarios);
    app.use('/rol', resRol);


    app.use('/insumos', resInsumos);

    app.use('/producto', resProducto);

    app.use('/ficha_tecnica', resFicha_tecnica);

    app.use('/compras', resCompras);

    app.use('/ventas', resVentas);
    app.use('/clientes', resClientes);

    app.use('/empleado',resEmpleado );//Donde esta todos los empleados

}

module.exports=resApi;
