// Obtener el artículo Section2
const $section2 = $('#Section2');

// Agregar evento de clic a cada botón en Section1
$('#container-button-user button').on('click', function() {
  const buttonText = $(this).text(); // Obtener el texto del botón clickeado
  const section2Content = ''; // Contenido que se mostrará en Section2

  // Actualizar contenido de Section2 según el botón clickeado
  switch (buttonText) {
    case 'Cotizacion':
      section2Content = '<p>Selecciona un producto a cotizar</p>' + '<button>Automoviles</button>' + 
      '<button></button>' + '<button>Vida</button>' + '<button>Copropiedades</button>';
      break;
    case 'Mis cotizaciones':
      section2Content = '<p>Contenido para Mis cotizaciones</p>';
      break;
    case 'Reportes':
      section2Content = '<p>Contenido para Reportes</p>';
      break;
    case 'Mi perfil':
      section2Content = '<p>Contenido para Mi perfil</p>';
      break;
    case 'Salir':
      section2Content = '<p>Contenido para Salir</p>';
      break;
    default:
      section2Content = '<p>No se ha seleccionado una opción</p>';
  }

  // Actualizar contenido de Section2
  $section2.html(section2Content);
});

//Botn Volver
$('#btn-volver').click(function(){
    window.location.replace('RolUser.html');
})