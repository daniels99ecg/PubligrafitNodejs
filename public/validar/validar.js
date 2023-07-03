Reportar = () =>{
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Reporte Generado Con Éxito',
    showConfirmButton: false,
    timer: 1500
  })
  }

//Pruebas de estado
function estado(){
  

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
   // Almacenar el título modificado en el almacenamiento local
   
}
// Validar Usuarios Daniel



// Validar Ventas Andrés




// la validacion ficha tecnica
validarAdd =() =>{

  Swal.fire({
      title: 'Quieres agregar más productos?',
      text: "You can continue adding products!",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: 'Guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Added product', 'Select more products', 'success');
      } else if (result.isDenied) {
        Swal.fire('Saved sale', 'Saved and ready to pay', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Oops!', 'info');
      }
    });       
}

// validacion de producto

eliminarProducto =(id) =>{
    
  Swal.fire({
      title: 'Eliminar Registro?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
      
        window.location='/producto/eliminar/'+id;
      }
    })
}

// la validacion ficha tecnica
eliminarFicha_Tecnica =(id) =>{
    
  Swal.fire({
      title: 'Eliminar Registro?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
      
        window.location='/ficha_tecnica/eliminar/'+id;
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
          text: 'Por favor ingresar datos!',
              
      })
        
  }else if(!regex2.test(dni)){
      Swal.fire({
          icon: 'error',
          title: 'DNI no válido',
          text: 'Por favor ingresar valores alfanuméricos',
              
      })

  }else if(!regex.test(nombre)){
      Swal.fire({
          icon: 'error',
          title: 'Nombre no válido',
          text: 'Por favor ingresar solo letras',
              
      }) 
      
  }else if(!regex.test(apellido)){
      Swal.fire({
          icon: 'error',
          title: 'Apellido no válido',
          text: 'Por favor ingresar solo letras',
              
      })   
   
  }else if(!regex2.test(telefono)){
      Swal.fire({
          icon: 'error',
          title: 'Teléfono no válido',
          text: 'Por favor ingresar solo números',
              
      })
      
  }else if(!regex3.test(email)){
      Swal.fire({
          icon: 'error',
          title: 'Correo electrónico no válido',
          text: 'Por favor ingresar un correo electrónico válido!',
          
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
          title: 'Confirmar el envío del formulario?',
          text: "Your file will be saved!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          Buttons: true
      }).then((result) => {
  if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
          'Registro Exitoso!',
          'Your file has been registered.',
          'success'
       )
  } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
      ) {
      swalWithBootstrapButtons.fire(
          'Registro Cancelado', 
          'Registration not completed',
          'error'
          )
          
      }
      
  })
  
}
}



// validacion de productos camilo
validarProducto =() =>{
     
    let producto= document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    precio=parseInt(precio);
    let cantidad = document.getElementById("cantidad").value;
    cantidad=parseInt(cantidad);
    let Caracteres = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    
    
    if(producto =="" || precio =="" || cantidad =="" ){
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor ingresar datos!',
            
          })
    }else if((!Caracteres.test(producto))){
        Swal.fire({
            icon: 'error',
            title: 'Datos inavalidos en producto',
            text: 'Por favor ingresar solo letras!',
            
          })
    }else if((!Number.isInteger(cantidad))){
        Swal.fire({
            icon: 'error',
            title: 'Datos inavalidos en cantidad',
            text: 'Por favor ingresar solo numeros!',
            
          })
    }else if((!Number.isInteger(precio))){
        Swal.fire({
            icon: 'error',
            title: 'Datos inavalidos en precio',
            text: 'Por favor ingresar solo numeros!',
            
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
            title: 'Confirmar en envio del formulario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {

              const producto = document.getElementById('producto');
              producto.submit();

              swalWithBootstrapButtons.fire(
                'Registro Enviado!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el envio',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }
    }
    
// validacion de ficha tecnica camilo 
validarFicha =() =>{
     
    let insumo= document.getElementById("insumo").value;
    insumo=parseInt(insumo);
    let cantidad_insumo = document.getElementById("cantidad_insumo").value;
    cantidad_insumo=parseInt(cantidad_insumo);
    let costo_insumo = document.getElementById("costo_insumo").value;
    costo_insumo=parseFloat(costo_insumo);
    let costo_final_producto = document.getElementById("costo_final_producto").value;
    costo_final_producto=parseFloat(costo_final_producto);
    let detalle= document.getElementById("detalle").value;
    let Caracteres = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    
    
    if(insumo =="" || cantidad_insumo =="" || costo_insumo =="" || costo_final_producto =="" || detalle ==""){
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor ingresar datos!',
            
          })
    }else if((!Number.isInteger(insumo))){
        Swal.fire({
            icon: 'error',
            title: 'Datos invalidos en insumos',
            text: 'Por favor ingresar solo letras!',
            
          })
    }else if((!Number.isInteger(cantidad_insumo))){
        Swal.fire({
            icon: 'error',
            title: 'Datos invalidos en cantidad de insumos',
            text: 'Por favor ingresar solo numeros!',
            
          })
    }else if((!Number.isInteger(costo_insumo))){
        Swal.fire({
            icon: 'error',
            title: 'Datos invalidos en costo de insumo',
            text: 'Por favor ingresar solo numeros!',
            
          })
    }
    else if((!Number.isInteger(costo_final_producto))){
      Swal.fire({
          icon: 'error',
          title: 'Campos Vacio',
          text: 'Por favor datos invalidos en costo final del producto!',
          
        })
  }
    else if((!Caracteres.test(detalle))){
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacio',
            text: 'Por favor ingresar datos!',
            
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
            title: 'Confirmar el envio del formulario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar!',
            confirmButtonText: 'Aceptar!',
            Buttons: true
          }).then((result) => {
            if (result.isConfirmed) {

              const ficha_tecnica =document.getElementById('ficha_tecnica');
              ficha_tecnica.submit();
              
              swalWithBootstrapButtons.fire(
                'Registro Enviado!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el envio',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }
    }



    
