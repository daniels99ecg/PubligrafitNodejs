
const conexion=require('../../database/db');

class Usuarios{
    constructor(){}

    
    async getUsuario(callback) {
        conexion.query('SELECT u.id_usuario, u.nombres, u.apellidos, u.email, u.contrasena, r.nombre_rol FROM usuario u, rol r WHERE u.fk_rol2=r.id_rol', callback);
         }
      
    async Buscar(id, callback){
       conexion.query(`SELECT u.id_usuario, u.nombres, u.apellidos, u.email, u.contrasena, r.nombre_rol FROM usuario u, rol r WHERE u.fk_rol2=r.id_rol and u.nombres='${id}'`, callback )
    }

    async Reporte(callback){
        conexion.query(`SELECT u.id_usuario, u.nombres, u.apellidos, u.email, u.contrasena, r.nombre_rol FROM usuario u, rol r WHERE u.fk_rol2=r.id_rol INTO OUTFILE 'C:/Users/emi--/OneDrive/Escritorio/reporte.xls' `, callback)
    }

    async Crear(callback){
        conexion.query(`SELECT id_rol, nombre_rol FROM rol WHERE 1 ` , callback)

    }

    async save(fk_rol2, nombres,apellidos,email,contrasena, callback){
        conexion.query(`INSERT INTO usuario SET ?`, {fk_rol2:fk_rol2, nombres:nombres, apellidos:apellidos, email:email, contrasena:contrasena, estado:1}, callback)

    }

    async Delete(id,callback){
        conexion.query(`DELETE FROM usuario WHERE id_usuario='${id}'` , callback)

    }

    async updateMostrar(id, callback){
        conexion.query(`SELECT id_usuario, nombres, apellidos, email, contrasena, estado FROM usuario WHERE id_usuario='${id}'` , callback)

    }

    async update(id,fk_rol2,nombres,apellidos,email,contrasena, callback){
        conexion.query(`UPDATE usuario SET fk_rol2=${fk_rol2}, nombres='${nombres}', apellidos='${apellidos}', email='${email}', contrasena='${contrasena}', estado=1 WHERE id_usuario='${id}'`, callback)

    }

    async cambiarEstado(algo,id, callback){
        conexion.query(`UPDATE usuario SET estado=${algo} WHERE id_usuario='${id}'`, callback)

    }
}

module.exports=Usuarios;