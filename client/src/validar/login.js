

function ingreso(){

const usuario=document.getElementById('correo').value;
const contra=document.getElementById('contrasena').value;

if( usuario=="" || contra==""){

    Swal.fire({
        icon: 'error',
        title: 'Campos Vacios',
        text: 'Por favor ingresar datos!',
        
      })


  
}else if(!usuario.includes("@") || !usuario.includes(".com")){
    Swal.fire({
        icon: 'error',
        title: 'Correo no valido',
        text: 'Por favor ingresar un correo valido!',
        
      })
}else{
          //Linea de codigo muy importante para el cambio de type button a submit
          const formulario=document.getElementById('pruebas');
          formulario.submit();

    
    }
}

