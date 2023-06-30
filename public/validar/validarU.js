//Para que el el reporte tire ventana modal
Reportar = () =>{
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Reporte Generado Con Éxito',
    showConfirmButton: false,
    timer: 1500
  })
  }
//El checkbox de el estado.
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

eliminarVenta =(id) =>{
    
  Swal.fire({
      title: 'Eliminar Registro?',
      text: "Se eliminara el registro por completo",
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
            text: "Estas seguro de relizar la accion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            Buttons: true
          }).then((result) => {
            if (result.isConfirmed) {
              const formulario=document.getElementById('formulario');
              formulario.submit()
              swalWithBootstrapButtons.fire(
                'Insumo Registrado!',
                'Verifique ahora en el listar de insumos el nuevo registro',
                'Gracias'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el registro del insumo',
                'El insumo no se registro',
                'Cancelo el registro'
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
            text: "Estas seguro de relizar la accion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            Buttons: true
          }).then((result) => {
            if (result.isConfirmed) {
              const formulario=document.getElementById('pruebas1');
              formulario.submit();
              swalWithBootstrapButtons.fire(
                'Insumo Actualizado!',
                'Verifique ahora en el listar de insumos el insumo actualizado',
                'Gracias'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Se cancelo el envio para la actualizacion',
                'El insumo no se actualizo',
                'Cancelo la actualizacion'
              )
            }
          })
        }
    }
  



    
