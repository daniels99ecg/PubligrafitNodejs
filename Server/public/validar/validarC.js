// Validar Usuarios Daniel
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

validarAdd =() =>{

  Swal.fire({
      title: 'Quieres agregar más productos?',
      text: "Puedes continuar agregando productos",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: 'Guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const filas=`<td><select name="Insumo" id="Insumo" style="width: 120px;">
        {{#each title}}
        <option value="{{id_insumo}}">{{nombre}}</option>
        {{/each}}
      </select></td>
      <td><input name="Cantidad" id="Cantidad" type="number" style="width: 90px;">
      </input></td>
      <td><input id="Precio" name="Precio" type="number" style="width: 90px;"></td>
      <td><select name="Iva" id="Iva">
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
        Swal.fire('Producto añadido.', 'Selecciona mas productos', 'success');
      } else if (result.isDenied) {
        Swal.fire('Guardado', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Oops!', 'info');
      }
    });       
}

eliminarCompra =(id) =>{
    
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
      
        window.location='/compras/eliminar/'+id;
      }
    })
}


    //Validación Compras Valeria 
function validarCompra (){
  const Proveedor=document.getElementById("Proveedor").value;
  const Fecha=document.getElementById("Fecha").value;
  const Total=document.getElementById("Total").value;
  
  
  
  if(Proveedor=="" || Fecha=="" || Total==""){
  
      Swal.fire({
          icon: 'error',
          title: 'Campos Vacios',
          text: 'Por favor ingresar datos!',
          
        })
  
   Campo = ["#Proveedor", "#Fecha", "#Total"];
  
   Swal.fire({
      icon: 'error',
      title: 'Campos Vacios',
      text: 'Por favor ingresar datos!',
      
    })
  }else if(Number.isInteger(Total)){
      document.querySelector("#Total").style.borderColor="red";
      Swal.fire({
          icon: 'error',
          title: 'No se pueden ingresar letras',
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
          confirmButtonText: 'Aceptar!',
          cancelButtonText: 'Cancelar!',
          Buttons: true
        }).then((result) => {
          if (result.isConfirmed) {

            const formulario = document.getElementById('compras'); 
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
  detalle2 =(id) =>{
    window.open(`detalle/${id}`, 'Detalles', 'left=400,top=150,width=800,height=500')
  }

  detalle3 =(id) =>{
  window.open(`/compras/detalle/${id}`, 'Detalles', 'left=400,top=150,width=800,height=500')
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