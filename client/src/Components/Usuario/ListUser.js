import React from "react";
import Nav from "../nav";
import Headers from "../headers";

// import  '../../plugins/chart.min.js';
// import  '../../plugins/feather.min.js';
// import  '../../js/script.js';

const ListUser=()=>{

    return(
        <div>
           
  <div className="layer"></div>


<a className="skip-link sr-only" href="#skip-target">Skip to content</a>
<div className="page-flex">

<aside className="sidebar" id="header">
                <Headers/>
                </aside>

  <div className="main-wrapper">
    
    <nav className="main-nav--bg">
            <Nav/>
            </nav>
   
<br/>
<br/>
<div>
<form action="buscar" method="post">
<div className="input-group">

       <input type="text" placeholder="Buscar Nombre" name="id" />
      <input type="submit" className="btn btn-primary" value="Buscar"/>
   
      </div>
  
</form>
</div>
<br/>
<a className="btn btn-primary ml-4" href="create" role="button">Nuevo Registro</a>
<br/>
<br/>
<div className="card" style={{width:"99%", overflowY:"scroll", overflowX:"hidden", marginLeft:"1%"}}>
    <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo Electronico</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Rol</th>
            <th scope="col">Estado</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          
             
                <tr id="lista">
                    <td>id_usuario</td>
                    <td>nombres</td>
                    <td>apellidos</td>
                    <td>email</td>
                    <td>contrasena</td>
                    <td>nombre_rol</td>
          <td>
                    <div className="switch-button">
                        <input type="checkbox" name="switch-button" id="switch-label-{{id_usuario}}" onclick="estado()" checked className="switch-button__checkbox"/>
                        <label for="switch-label-{{id_usuario}}" className="switch-button__label"></label>
                    </div>
                </td>
           

            <td>
              <a href="/usuarios/update/{{id_usuario}}"> <button type="button" className="btn btn-outline-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"></path>
    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path>
  </svg>
                  </button></a>



                  <a href="/">
                  <button type="botton" className="btn btn-outline-secondary" name="eliminar" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
  </svg>
                    
                  </button></a>
            </td>
          </tr>
 
        </tbody>
      </table>
  

    </div>
  



    <footer className="footer">
  <div className="container footer--flex">
    <div className="footer-start">
      <p>2021 © Elegant Dashboard - <a href="elegant-dashboard.com" target="_blank"
          rel="noopener noreferrer">elegant-dashboard.com</a></p>
    </div>
    <ul className="footer-end">
      <li><a href="##">About</a></li>
      <li><a href="##">Support</a></li>
      <li><a href="##">Puchase</a></li>
    </ul>
  </div>
</footer>
  </div>
</div>







        </div>
    );
}

export default ListUser;