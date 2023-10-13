import './App.css';
// import {useState} from "react";
// import Axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import User from './Pages/User';

function App() {
//   const [fk_rol2, setFk_rol2]=useState(0)
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




  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path='/' element={<User/>} />
</Routes>

</BrowserRouter>

    {/* <div className="text-center">
  </div>
  
    <div className="form-row">
    
      
      <div className="col-xs-4">
        <label for="inputEmail4" className="form-label">Nombres(*)</label>

        <input type="text" className="form-control" placeholder="Nombre" aria-label="Last name" id="nombre" name="nombres" onChange={(event)=>{
          setNombres(event.target.value)
        }} />
      </div>
      <div className="col-xs-4">
        <label for="inputEmail4" className="form-label">Apellidos(*)</label>

        <input type="text" className="form-control" placeholder="Apellidos" aria-label="First name" id="apellido" name="apellidos" onChange={(event)=>{
          setApellidos(event.target.value)
        }}   />
      </div>
      
      
     </div>

     <div className="form-row">
      
      <div className="col-xs-4">
        <label for="inputEmail4" className="form-label">Correo electronico(*)</label>

        <input type="text" className="form-control" placeholder="Correo electronico" aria-label="First name" id="correo" name="email" onChange={(event)=>{
          setEmail(event.target.value)
        }}  />
      </div>
      <div className="col-xs-4">
        <label for="inputEmail4" className="form-label">Contraseña(*)</label>

        <input type="text" className="form-control" placeholder="Contraseña" aria-label="Last name" id="contrasena" name="contrasena" onChange={(event)=>{
          setContrasena(event.target.value)
        }}  />
      </div>
     </div>

     <div className="form-row">
      <div className="col-xs-4">
      <label for="inputEmail4" className="form-label" >Confirmar Contraseña(*)</label>

      <input type="text" className="form-control"  placeholder="Confirmar Contraseña" aria-label="Last name" id="confirmar" />
     </div>
     </div>

     <div className="roles row" >
      <select  id="fk_rol2" className="roles2" name="fk_rol2" onChange={(event)=>{
          setFk_rol2(event.target.value)
        }} >
        
      
        <option value="1">Administrador</option>
        
        

      </select>
      
     </div>
<div>
      <div className="col">
      <button  type="submit" className="btn btn-primary mr-5" onClick={add}>Registrar</button>
     </div>
     </div>
 */}

    </div>
  );
}

export default App;
