import React from "react";
import Nav from "../nav"
import Headers from "../headers";

// import {useState} from "react";
// import Axios from "axios";


const User=()=>{

  

//      const [fk_rol2, setFk_rol2]=useState(0)
//   const [nombres, setNombres]=useState("")
//   const [apellidos, setApellidos]=useState("")
//   const [email, setEmail]=useState("")
//   const [contrasena, setContrasena]=useState("")

// const add=()=>{
//   Axios.post("http://localhost:3001/usuarios/save",{
//     fk_rol2:fk_rol2,
//     nombres:nombres,
//     apellidos:apellidos,
//     email:email,
//     contrasena:contrasena

//   }).then(()=>{
//     alert('usuario registrado')
//   })
// }
    return(
    <div>   

<div className="page-flex">
            <aside className="sidebar" id="header">
                <Headers/>
                </aside>


        
            <div className="main-wrapper">

            <nav className="main-nav--bg">
            <Nav/>
            </nav>
   
   
  <div className="card">

    <div className="card-body">

   <form action="/usuarios/save" method="POST" id="pruebas" >
    <div className="text-center">
    <img className="img-fluid ml-5" src="https://cdn-icons-png.flaticon.com/512/359/359858.png" alt=""/>
  </div>
  
    <div className="form-row">
    
      
      <div className="col-xs-4">
        <label for="inputEmail4" className="form-label">Nombres(*)</label>

        <input type="text" className="form-control" placeholder="Nombre" aria-label="Last name" id="nombre" name="nombres"/>
      </div>
      <div className="col-xs-4">
        <label for="inputEmail4" className="form-label">Apellidos(*)</label>

        <input type="text" className="form-control" placeholder="Apellidos" aria-label="First name" id="apellido" name="apellidos"/>
      </div>
      
      
     </div>

     <div className="form-row">
      
      <div className="col-xs-4">
        <label for="inputEmail4" className="form-label">Correo electronico(*)</label>

        <input type="text" className="form-control" placeholder="Correo electronico" aria-label="First name" id="correo" name="email"/>
      </div>
      <div className="col-xs-4">
        <label for="inputEmail4" className="form-label">Contraseña(*)</label>

        <input type="text" className="form-control" placeholder="Contraseña" aria-label="Last name" id="contrasena" name="contrasena"/>
      </div>
     </div>

     <div className="form-row">
      <div className="col-xs-4" >
      <label for="inputEmail4" className="form-label" >Confirmar Contraseña(*)</label>

      <input type="text" className="form-control"  placeholder="Confirmar Contraseña" aria-label="Last name" id="confirmar"/>
     </div>
     </div>

     <div className="roles row">
      <select  id="" className="roles2" name="fk_rol2">
        
    
        <option value="1">Administrador</option>
        
       

      </select>
      
     </div>
<div>
      <div className="col" style={{marginLeft:'35%'}}>
      <button  type="button" className="btn btn-primary mr-5" onclick="validart()" >Registrar</button>
      <a href="/usuarios"><button type="button" className="btn btn-danger ">Cancelar</button></a>
     </div>
     </div>
   </form>
 
 </div>
  </div>
   
    
  </div>
</div>

            
        </div>
      
    );

}

export default User;