// Validar Usuarios Daniel

//Ventana
function ventana(){
  window.open('asignar', 'Roles', 'left=400,top=150,width=800,height=500')
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
 

function validart(){

    
    let vnombre=document.getElementById("nombre").value;
    let vapellido=document.getElementById("apellido").value;
    
    let vcorreo=document.getElementById("correo").value;
    let vcontrasena=document.getElementById("contrasena").value;
    let vconfirmar=document.getElementById("confirmar").value;

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    
   if( vnombre=="" || vapellido==""||vcorreo==""||vcontrasena==""||vconfirmar==""){

        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor ingresar datos!',
            
          })


      
    }else if(!regex.test(vnombre)){
      Swal.fire({
        icon: 'error',
        title: 'Campo No Valido',
        text: 'Por favor ingresar datos!',
        
      })
    }else if(!regex.test(vapellido)){
      Swal.fire({
        icon: 'error',
        title: 'Campo No Valido',
        text: 'Por favor ingresar datos!',
        
      })
    }
    
    else if(!vcorreo.includes("@") || !vcorreo.includes(".com")){
        Swal.fire({
            icon: 'error',
            title: 'Correo no valido',
            text: 'Por favor ingresar un correo valido!',
            
          })
    }else if(vcontrasena!==vconfirmar){
        Swal.fire({
            icon: 'error',
            title: 'La contraseña no coincide ',
            text: 'Verifique que sus contraseñas sean iguales!',
            
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
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            Buttons: true
          }).then((result) => {
            if (result.isConfirmed) {

              //Linea de codigo muy importante para el cambio de type button a submit
              const formulario=document.getElementById('pruebas');
              formulario.submit();

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


//Eliminar Usuarios
eliminarUsuario =(id) =>{
    
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
      
        window.location='/usuarios/eliminar/'+id;
      }
    })
}

//Eliminar rol
eliminarRol =(id) =>{
    
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
      
        window.location='/rol/eliminar/'+id;
      }
    })
}

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

//Eliminar Insumos
eliminarInsumos =(id) =>{
    
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
      
        window.location='/insumos/eliminar/'+id;
      }
    })
}

    //Validacion de insumos Registar...
//Validacion de insumos Registar... Hayberth
validarInsumos =() =>{
    
    let nombre= document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    precio=parseInt(precio);
    let cantidad = document.getElementById("cantidad").value;
    cantidad=parseInt(cantidad);
    let Caracteres = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    

    if(nombre =="" || precio =="" || cantidad =="" ){
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor ingresar datos!',
            
          })
    }else if((!Caracteres.test(nombre))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no valido en el campo (Nombre)',
            text: 'Por favor ingresar solo letras!',
            
          })
    }else if((!Number.isInteger(cantidad))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no validos en el campo (Cantidad)',
            text: 'Por favor ingresar solo numeros',
            
          })
    }else if((!Number.isInteger(precio))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no validos en el campo (Precio)',
            text: 'Por favor ingresar solo numeros',
            
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
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            Buttons: true
          }).then((result) => {
            if (result.isConfirmed) {

                //Linea de codigo muy importante para el cambio de type button a submit
                const formulario=document.getElementById('pruebas1');
                formulario.submit();

              swalWithBootstrapButtons.fire(
                'Insumo Registrado!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el registro del insumo',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
        }
    }

//Validacion de insumos actualizar. Hayberth
validarAInsumos =() =>{
    let nombre= document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    precio=parseInt(precio);
    let cantidad = document.getElementById("cantidad").value;
    cantidad=parseInt(cantidad);
    let Caracteres = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    

    if(nombre =="" || precio =="" || cantidad =="" ){
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor ingresar datos!',
            
          })
    }else if((!Caracteres.test(nombre))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no valido en el campo (Nombre)',
            text: 'Por favor ingresar solo letras!',
            
          })
    }else if((!Number.isInteger(cantidad))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no validos en el campo (Cantidad)',
            text: 'Por favor ingresar solo numeros',
            
          })
    }else if((!Number.isInteger(precio))){
        Swal.fire({
            icon: 'error',
            title: 'Caracteres no validos en el campo (Precio)',
            text: 'Por favor ingresar solo numeros',
            
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
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            Buttons: true
          }).then((result) => {
            if (result.isConfirmed) {
              //Linea de codigo muy importante para el cambio de type button a submit
              const formulario=document.getElementById('pruebas1');
              formulario.submit();

              swalWithBootstrapButtons.fire(
                'Insumo Actualizado!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el envio para la actualizacion',
                'Your imaginary file is safe :)',
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

              const formulario=document.getElementById('producto');
              formulario.submit();

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


    
