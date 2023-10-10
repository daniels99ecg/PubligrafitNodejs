const conexion=require('../../database/db');

class Rol{

    async getRol(callback){
        conexion.query('SELECT rxp.id_rol_x_permiso, r.nombre_rol, p.nombre_permiso FROM rol r, rol_x_permiso rxp, permiso p WHERE rxp.fk_rol=r.id_rol and rxp.fk_permiso=p.id_permiso;' , callback)
    }

    async buscadorRoles(id, callback){
        conexion.query(`SELECT rxp.id_rol_x_permiso, r.nombre_rol, p.nombre_permiso FROM rol r, rol_x_permiso rxp, permiso p WHERE rxp.fk_rol=r.id_rol and rxp.fk_permiso=p.id_permiso and r.nombre_rol='${id}'` , callback)
    }

    async guardarRoles(nombre,fecha, callback){
        conexion.query(`INSERT INTO rol SET ?`, {nombre_rol:nombre, fecha:fecha, estado:1}, callback)
    }

    async Eliminar(id,callback){
        conexion.query(`DELETE FROM rol_x_permiso WHERE id_rol_x_permiso='${id}'` , callback)

    }
    async Update(id,callback){
        conexion.query(`SELECT id_rol_x_permiso, fk_rol, fk_permiso FROM rol_x_permiso WHERE  id_rol_x_permiso='${id}'`,callback)

    }

    async updateGuardar(id,fk_rol2,nombres,apellidos,email,contrasena,callback){
        conexion.query(`UPDATE usuario SET fk_rol2=${fk_rol2}, nombres='${nombres}', apellidos='${apellidos}', email='${email}', contrasena='${contrasena}', estado=1 WHERE id_usuario='${id}'`, callback)

    }

    async asignarRoles(callback){
        conexion.query('SELECT id_rol, nombre_rol FROM  rol  WHERE 1', callback);

    }

    async asignarRolGuardar(rol,permiso,callback){
        conexion.query(`INSERT INTO rol_x_permiso SET ?`, {fk_rol:rol, fk_permiso:permiso}, callback)

    }
}



module.exports=Rol;