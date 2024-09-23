$.getJSON('BD_SaySa.json', function(data){
    //Configuramos el inicio sesion
    function InicioSesion(correo, password) {
        //Buscamos el usuario en la base de datos
        var usuario = $.grep(data.usuarios, function(usuario){
            return usuario.correo === email && usuario.password === password;
        })[0];

        //Verificamos si encontro el usuario para permitir ingreso
        if(usuario){
            alert('Bienvenido ' + usuario.nombre);
            window.location.href = 'contactanos.html';
        } else {
            alert('Correo o contraseña incorrectos');
        }
    }
})

//tengo que tomar el texto del input y buscarlo en la base de datos
//Luego dentro del boton asignar la funcion anterior