//Tomamos el valor de input de las casillas correo y password
$(document).ready(function() {
    $('#btn-ingresar').on('click', function() {
      // Obtenemos los valores del input email y password
      var correo = $('#text-email').val();
      var contra = $('#text-password').val();
  
      // Hacemos la solicitud AJAX a la base de datos
      $.getJSON('BD_SaySa.json', function(data) {
        // Buscamos el usuario en la base de datos
        var usuario = $.grep(data.usuarios, function(usuario) {
          return usuario.email === correo && usuario.password === contra;
        })[0];
  
        // Verificamos si encontramos el usuario
        if (usuario) {
          // Si encontramos el usuario, mostramos un mensaje de bienvenida y redirigimos a la pantalla de contacto
          alert('Bienvenido ' + usuario.nombre);
          window.location.href = 'home.html';
        } else {
          // Si no encontramos el usuario, mostramos un mensaje de error
          alert('Correo o contraseña incorrectos');
        }
      });
    });
  });

//tengo que tomar el texto del input y buscarlo en la base de datos
//Luego dentro del boton asignar la funcion anterior