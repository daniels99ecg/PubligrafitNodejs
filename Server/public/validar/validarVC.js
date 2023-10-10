function estado(){
  
// Almacenar el título modificado en el almacenamiento local  
  const validar=document.getElementById('switch-label');
  
  if(validar.checked){
    localStorage.setItem('estado', true);
    if(localStorage.getItem('estado')==='true'){
      document.getElementById('lista').style.color='black';
    
    }
    }else{
      localStorage.setItem('estado', false);

      if( localStorage.getItem('estado')==='false'){
        document.getElementById('lista').style.color='#878787';
      
      } 
  }
}

// Validar Ventas Andrés

validarVenta =() =>{
    
  let cliente = document.getElementById("cliente").value;
  cliente = parseInt(cliente);
  let comprobante = document.getElementById("comprobante").value;
  let fecha = document.getElementById("fecha").value;
  let total = document.getElementById("total").value;
  let cantidad = document.getElementById("cantidad").value;
  
  let regex = /^\d+$/;

  if(cliente =="" || comprobante =="" || fecha =="" || total =="" || cantidad ==""){

      Swal.fire({
          icon: 'error',
          title: 'Campos Vacíos',
          text: 'Por Favor Ingresar Datos',
              
      })
        
  }else if(!regex.test(cliente)){
      Swal.fire({
          icon: 'error',
          title: 'DNI Inválido',
          text: 'Por Favor Ingresar Valores Alfanuméricos',
              
      })
  
  }else{
      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
      },
          buttonsStyling: false
      })
            
      swalWithBootstrapButtons.fire({
          title: 'Confirmar El Envío Del Formulario?',
          text: "Te Archivo Se Guardará",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          Buttons: true
      }).then((result) => {
  if (result.isConfirmed) {
    const form=document.getElementById('formularioVentas');
    form.submit();
      swalWithBootstrapButtons.fire(
          'Registro Exitoso!',
          'Tu Archivo Ha Sido Registrado',
          'success'
       )
  } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
      ) {
      swalWithBootstrapButtons.fire(
          'Registro Cancelado',
          'Registro No Completado',
          'error'
          )
          
      }
      
  })
  
}
}

validarAdd =() =>{

  Swal.fire({
      title: 'Quieres Agregar Más Productos?',
      text: "Puedes Continuar Agregando Más Productos",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: 'Guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        const filas = `<td><select name="producto" id="producto">
        {{#each title}}
        <option value="{{id_producto}}">Talonarios</option>
        {{/each}}

      </select></td>
      <td><input id="cantidad" name="cantidad" type="number" style="width: 50%;"></td>
     
      <td><input type="text" name="precio" style="width: 50%;"></td>
      
      <td><select name="iva" id="iva">
        <option value=""></option>
        <option value="0.19">19%</option>
        <option value="0.16">16%</option>
        <option value="0.14">14%</option>
      </select></td>
      <td>208.800</td>
      </td>`

        let btn = document.createElement("tr");
        btn.innerHTML=filas;
        document.getElementById("tablas").appendChild(btn);

        Swal.fire('Producto Añadido', 'Selecciona Más Productos', 'success');
      } else if (result.isDenied) {
        Swal.fire('Venta Guardada', 'Guardada Y Lista Para Pagar', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Oops!', 'info');
      }
    });       
}

detalle =(id) =>{
  window.open(`detalle/${id}`, 'Detalles', 'left=150,top=200,width=1300,height=400')
}

detalleRegistro =(id) =>{
  window.open(`/ventas/detalle/${id}`, 'Detalles', 'left=150,top=200,width=1300,height=400')
}


Reportar = () =>{
Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Reporte Generado Con Éxito',
  showConfirmButton: false,
  timer: 1500
})
}

eliminarVenta =(id) =>{
    
  Swal.fire({
      title: 'Eliminar Registro?',
      text: "No Podrás Revertir Esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
      
        window.location='/ventas/eliminar/'+id;
      }
    })
}

eliminarCliente =(id) =>{
    
  Swal.fire({
      title: 'Eliminar Registro?',
      text: "No Podrás Revertir Esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
      
        window.location='/clientes/eliminar/'+id;
      }
    })
}

// Validar Clientes

validarCliente =() => {
  
  let dni = document.getElementById("dni").value;
  dni = parseInt(dni);
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  telefono = parseInt(telefono);
  let direccion = document.getElementById("direccion").value;
  let email = document.getElementById("email").value;
  
  let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  let regex2 = /^\d+$/;
  let regex3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(dni =="" || nombre =="" || apellido =="" || telefono == "" || direccion =="" || email ==""){

      Swal.fire({
          icon: 'error',
          title: 'Campos Vacíos',
          text: 'Por Favor Ingresar Datos',
              
      })
        
  }else if(!regex2.test(dni)){
      Swal.fire({
          icon: 'error',
          title: 'DNI Inválido',
          text: 'Por Favor Ingresar Valores Alfanuméricos',
              
      })

  }else if(!regex.test(nombre)){
      Swal.fire({
          icon: 'error',
          title: 'Nombre Inválido',
          text: 'Por Favor Ingresar Solo Letras',
              
      }) 
      
  }else if(!regex.test(apellido)){
      Swal.fire({
          icon: 'error',
          title: 'Apellido Inválido',
          text: 'Por Favor Ingresar Solo Letras',
              
      })   
   
  }else if(!regex2.test(telefono)){
      Swal.fire({
          icon: 'error',
          title: 'Teléfono Inválido',
          text: 'Por Favor Ingresar Solo Números',
              
      })
      
  }else if(!regex3.test(email)){
      Swal.fire({
          icon: 'error',
          title: 'Correo Electrónico Inválido',
          text: 'Por favor Ingresar Un Correo Electrónico Válido!',
          
        })     
  
  }else{
      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
      },
          buttonsStyling: false
      })
            
      swalWithBootstrapButtons.fire({
          title: 'Confirmar El Envío Del Formulario?',
          text: "Te Archivo Se Guardará",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          Buttons: true
      }).then((result) => {
  if (result.isConfirmed) {
    const form=document.getElementById('formularioClientes');
    form.submit();
      swalWithBootstrapButtons.fire(
          'Registro Exitoso!',
          'Tu Archivo Ha Sido Registrado',
          'success'
       )
  } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
      ) {
      swalWithBootstrapButtons.fire(
          'Registro Cancelado', 
          'Registro No Completado',
          'error'
          )
          
      }
      
  })
  
}
}

validarCliente2 =() => {
  
  let dni = document.getElementById("dni").value;
  dni = parseInt(dni);
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  telefono = parseInt(telefono);
  let direccion = document.getElementById("direccion").value;
  let email = document.getElementById("email").value;
  
  let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  let regex2 = /^\d+$/;
  let regex3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(dni =="" || nombre =="" || apellido =="" || telefono == "" || direccion =="" || email ==""){

      Swal.fire({
          icon: 'error',
          title: 'Campos Vacíos',
          text: 'Por Favor Ingresar Datos',
              
      })
        
  }else if(!regex2.test(dni)){
      Swal.fire({
          icon: 'error',
          title: 'DNI Inválido',
          text: 'Por Favor Ingresar Valores Alfanuméricos',
              
      })

  }else if(!regex.test(nombre)){
      Swal.fire({
          icon: 'error',
          title: 'Nombre Inválido',
          text: 'Por Favor Ingresar Solo Letras',
              
      }) 
      
  }else if(!regex.test(apellido)){
      Swal.fire({
          icon: 'error',
          title: 'Apellido Inválido',
          text: 'Por favor ingresar solo letras',
              
      })   
   
  }else if(!regex2.test(telefono)){
      Swal.fire({
          icon: 'error',
          title: 'Teléfono Inválido',
          text: 'Por favor ingresar solo números',
              
      })
      
  }else if(!regex3.test(email)){
      Swal.fire({
          icon: 'error',
          title: 'Correo Electrónico Inválido',
          text: 'Por Favor Ingresar Un Correo Electrónico Válido!',
          
        })     
  
  }else{
      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
      },
          buttonsStyling: false
      })
            
      swalWithBootstrapButtons.fire({
          title: 'Confirmar El Envío Del Formulario?',
          text: "Tu Archivo Se Guardará",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          Buttons: true
      }).then((result) => {
  if (result.isConfirmed) {
    const form=document.getElementById('formularioClientes');
    form.submit();
      swalWithBootstrapButtons.fire(
          'Actualización Exitosa!',
          'Su Archivo Ha Sido Actualizado.',
          'success'
      )
  } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
      ) {
      swalWithBootstrapButtons.fire(
          'Actualización Cancelada',
          'Su Archivo Está Seguro',
          'error'
          )
          
      }
      
  })
  
}
}