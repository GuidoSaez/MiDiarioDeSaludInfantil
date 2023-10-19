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




// ** <------------------------------- MIS FUNCIONES -------------------------------------------------->

function fnValidarRegistro () {
  email = $$("#registroEmail").val();
  password = $$("#registroPassword").val();

  if (email != "" && password != "") {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {          // Signed in
        var user = userCredential.user;
        console.log("Bienvenid@!!! " + email); // ...
        mainView.router.navigate('/menuPrincipal/');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
        if (errorCode == "auth/email-already-in-use") {
          console.error("el mail ya esta usado");
        }
      });
  }
}

function fnValidarInicioSesion () {
  email = $$("#loginEmail").val();
  password = $$("#loginPassword").val();
  if(email != "" && password != "") {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log("Bienvenid@!!! " + email);
        mainView.router.navigate('/menuPrincipal/');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
      });
  }
}


// ** <--------------------------------------- VARIABLES GLOBALES -------------------------------------------->

let email, password;