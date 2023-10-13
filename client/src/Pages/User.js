import React from "react";

const User=()=>{

   const hola=()=>{
        alert("Hola desde react");
    }
    return(
        <div>
            Hola mundo esto es una ruta

                <br/>
        <button className="btn btn-primary" onClick={hola}>Hola</button>
        </div>
      
    );

}

export default User;