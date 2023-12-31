//const { val } = require("dom7");

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
          { path: '/about/',           url: 'about.html' },
          { path: '/index/',           url: 'index.html' },
          { path: '/registro/',        url: 'registro.html' },
          { path: '/inicioSesion/',    url: 'inicioSesion.html' },
          { path: '/menuPrincipal/',    url: 'menuPrincipal.html' },
          { path: '/registroNiño/',    url: 'registroNiño.html' },
          { path: '/controlDeSalud/',    url: 'controlDeSalud.html' },
          { path: '/notas_observaciones/',    url: 'notas_observaciones.html' },
          { path: '/controlVacunas/',    url: 'controlVacunas.html' },
          { path: '/crearNota/',    url: 'crearNota.html' },
          { path: '/consultasMedicas/',    url: 'consultasMedicas.html' },
          { path: '/crearConsultaMedica/',    url: 'crearConsultaMedica.html' },
          { path: '/alertas/',    url: 'alertas.html' },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    
});

$$(document).on('page:init', '.page[data-name="registro"]', function (e) {
    $$("#btnRegistrar").on('click', fnValidarRegistro);
});

$$(document).on('page:init', '.page[data-name="inicioSesion"]', function (e) {
    $$("#btnIniciarSesion").on('click', fnValidarInicioSesion);
});

$$(document).on('page:init', '.page[data-name="menuPrincipal"]', function (e) {
    
});

$$(document).on('page:init', '.page[data-name="registroNiño"]', function (e) {
    $$("#btnguardarRegistroNiño").on('click', fnRegistroNiño);
});

$$(document).on('page:init', '.page[data-name="controlDeSalud"]', function (e) {
    $$("#btnguardarControlSalud").on('click', fnControles)
});

$$(document).on('page:init', '.page[data-name="notas_observaciones"]', function (e) {
    $$("#btnCrearNota").on('click', fnCrearNotas)
    fnMostrarNota();
});

$$(document).on('page:init', '.page[data-name="controlVacunas"]', function (e) {
  $$("#btnGuardarControlVacunas").on('click', fnVacunas)
});

$$(document).on('page:init', '.page[data-name="crearNota"]', function (e) {
    $$("#btnGuardarNota").on('click', fnAgregarNota)
});

$$(document).on('page:init', '.page[data-name="consultasMedicas"]', function (e) {
    $$("#btnCrearConsulta").on('click', fnCrearConsulta)
    fnMostrarConsultaMedica();
});

$$(document).on('page:init', '.page[data-name="crearConsultaMedica"]', function (e) {
    $$("#btnGuardarConsulta").on('click', fnAgregarConsulta)
});

$$(document).on('page:init', '.page[data-name="alertas"]', function (e) {
    
});

