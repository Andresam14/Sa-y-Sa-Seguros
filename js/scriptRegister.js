$(document).ready(function(){
    //Registramos el evento de Submit
    $('#form-Register').submit(function(event) {
        event.preventDefault(); //Evitamos que el formulario se envie al servidor

        //Declaramos las variables que van a enviarse al formulario
        var nombre = $('input[name="Nombre"]').val();
        var correo = $('input[name="Correo"]').val();
        var contraseña = $('input[name="Contraseña"]').val();
        var confirmarContraseña = $('input[name="ConfirmarContraseña"]').val();

        //Comparamos que las contraseñas sean iguales
        if(contraseña !== confirmarContraseña){
            alert("Las contraseñas no coinciden");
            return;
        }
        //Creamos el objeto que se enviara a la BD
        var userData = {
            id: Date.now(),
            nombre: nombre,
            correo: correo,
            contraseña: contraseña
        }
        //
        var database = JSON.parse(localStorage.getItem('BD_SaySa'));
        if(!database){
            database = {usuarios: []};
        }
        database.usuarios.push(userData);
        localStorage.setItem('BD_SaySa', JSON.stringify(database));

        //Enviamos los datos al JSON
        fetch('BD_SaySa.json', {
            method: 'PUT',
            body: JSON.stringify(database),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Datos guardados correctamente');
        })
        .catch(error => {
            console.error('Error al guardar datos:', error);
        });
        alert('Usuario Registrado!');
    })
})