//Tomamos el valor de input de las casillas correo y password
$(document).ready(function(){
  //Cargamos la base de datos Json
  var database = $.getJSON('BasesDatos/BD_SaySa', function(data){
    // Verificamos el inicio de sesion
    $('#btn-ingresar').submit(function() {
      var correo = $('#text-email').val();
      var password = $('#text-password').val();
      var usuario = data.usuarios.find(function(usuario){
        return usuario.correo === correo && usuario.password === password;
      });
      if(usuario){
        window.location.replace('RolUser.html');
        //alert('Bienvenido '+ usuario.nombre);
        //Cambiamos el logo y nombre en la zona de Inicio Sesion
        $('#user-SignIn').text(usuario.nombre);
        $('#logo-SignIn').attr('', usuario.imagen);
      } else{
        alert('Correo o contraseña incorrectos');
      }
    });
    
  });
});

//tengo que tomar el texto del input y buscarlo en la base de datos
//Luego dentro del boton asignar la funcion anterior