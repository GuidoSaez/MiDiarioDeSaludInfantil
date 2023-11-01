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
    $$("#btnguardarRegistroNiño").on('click', fnGuardarRegistroNiño);
});

$$(document).on('page:init', '.page[data-name="controlDeSalud"]', function (e) {
    $$("#btnguardarControlSalud1M").on('click', fnGuardarControlSalud1M)
});

$$(document).on('page:init', '.page[data-name="notas_observaciones"]', function (e) {
    
});



// ** <------------------------------- MIS FUNCIONES -------------------------------------------------->

function fnValidarRegistro () {
  email = $$("#registroEmail").val();
  password = $$("#registroPassword").val();

  if (email != "" && password != "") {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {          // Signed in
        var user = userCredential.user; 
        mainView.router.navigate('/menuPrincipal/');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
        if (errorCode == "auth/email-already-in-use") {
          console.error("el mail ya esta usado");
        };
      });
  };  
};

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

function fnGuardarRegistroNiño() {
  nombre = $$("#registroNiñoNombre").val();
  apellido = $$("#registroNiñoApellido").val();
  dni = $$("#registroNiñoDni").val();
  fechaNacimiento = $$("#registroNiñoFechaNacimiento").val();
  pais = $$("#registroNiñoPais").val();
  provincia = $$("#registroNiñoProvincia").val();
  horaNacimiento = $$("#registroNiñoHoraNacimiento").val();
  tipoDeParto =  $$("#tipoPartoCesarea").val();
  tipoDeParto =  $$("#tipoPartoNormal").val();
  edadGestacional = $$("#edadGestacional").val();
  apgar = $$("#apgar").val();
  peso = $$("#peso").val();
  talla = $$("#talla").val();
  perimetroCefalico = $$("#perimetroCefalico").val();
  grupoSanguineo = $$("#grupoSanguineo").val();
  factorRH = $$("#factorRH").val();
  reanimacion = $$("#reanimacion").val();
  

  let datos = { 
    nombre: nombre,
    apellido: apellido,
    dni: dni, 
    fechaNacimiento: fechaNacimiento, 
    pais: pais, 
    provincia: provincia, 
    horaNacimiento: horaNacimiento,
    tipoDeParto: tipoDeParto,
    edadGestacional: edadGestacional,
    apgar: apgar,
    peso: peso, 
    talla: talla,
    perimetroCefalico: perimetroCefalico,
    grupoSanguineo: grupoSanguineo,
    factorRH: factorRH,
    reanimacion: reanimacion
  }

  

  let iD = email;

  coleccionDatosNiños.doc(iD).set(datos)
  .then ( function(docRef) {
    mainView.router.navigate('/menuPrincipal/')
  })
  .catch (function(error) {
    console.log("error" + error)
  })

}

function fnGuardarControlSalud1M() {
  fecha1MPrimerControl = $$("#fecha1MPrimerControl").val();
  diasDeVida1MPrimerControl = $$("#diasDeVida1MPrimerControl").val();
  peso1MPrimerControl = $$("#peso1MPrimerControl").val();
  pesoPercentil1MPrimerControl = $$("#pesoPercentil1MPrimerControl").val();
  talla1MPrimerControl = $$("#talla1MPrimerControl").val();
  tallaPercentil1MPrimerControl = $$("#tallaPercentil1MPrimerControl").val();
  perCefalico1MPrimerControl = $$("#perCefalico1MPrimerControl").val();
  perCefalicoPercentil1MPrimerControl = $$("#perCefalicoPercentil1MPrimerControl").val();

  fecha1MSegundoControl = $$("#fecha1MSegundoControl").val();
  diasDeVida1MSegundoControl = $$("#diasDeVida1MSegundoControl").val();
  peso1MSegundoControl = $$("#peso1MSegundoControl").val();
  pesoPercentil1MSegundoControl = $$("#pesoPercentil1MSegundoControl").val();
  talla1MSegundoControl = $$("#talla1MSegundoControl").val();
  tallaPercentil1MSegundoControl = $$("#tallaPercentil1MSegundoControl").val();
  perCefalico1MSegundoControl = $$("#perCefalico1MSegundoControl").val();
  perCefalicoPercentil1MSegundoControl = $$("#perCefalicoPercentil1MSegundoControl").val();

  fecha1MTercerControl = $$("#fecha1MTercerControl").val();
  diasDeVida1MTercerControl = $$("#diasDeVida1MTercerControl").val();
  peso1MTercerControl = $$("#peso1MTercerControl").val();
  pesoPercentil1MTercerControl = $$("#pesoPercentil1MTercerControl").val();
  talla1MTercerControl = $$("#talla1MTercerControl").val();
  tallaPercentil1MTercerControl = $$("#tallaPercentil1MTercerControl").val();
  perCefalico1MTercerControl = $$("#perCefalico1MTercerControl").val();
  perCefalicoPercentil1MTercerControl = $$("#perCefalicoPercentil1MTercerControl").val();

  fibrosisQuistica = $$("#fibrosisQuistica").val();
  defiBiotinidasa = $$("#defiBiotinidasa").val();
  fenilcetonuria = $$("#fenilcetonuria").val();
  galactosemia = $$("#galactosemia").val();
  hiperSupraConge = $$("#hiperSupraConge").val();
  hipoConge = $$("#hipoConge").val();
  otoAcusticas = $$("#otoAcusticas").val();
  reflejoOjoRojo = $$("#reflejoOjoRojo").val();

  let iD = email;

  let datos = {
    fecha: fecha1MPrimerControl,
    diasDeVida: diasDeVida1MPrimerControl,
    peso: peso1MPrimerControl,
    pesoPercentil: pesoPercentil1MPrimerControl,
    talla: talla1MPrimerControl,
    tallaPercentil: tallaPercentil1MPrimerControl,
    perimetroCefalico: perCefalico1MPrimerControl,
    perimetroCefalicoPercentil: perCefalicoPercentil1MPrimerControl,

  }

  coleccionControlDeSalud.doc(iD).set(datos)
  .then ( function(docRef) {
    mainView.router.navigate('/menuPrincipal/')
  })
  .catch (function(error) {
    console.log("error" + error)
  })
}




// ** <--------------------------------------- VARIABLES GLOBALES -------------------------------------------->

let reflejoOjoRojo, otoAcusticas, hipoConge, hiperSupraConge, galactosemia, fenilcetonuria, defiBiotinidasa, fibrosisQuistica, perCefalicoPercentil1MTercerControl, perCefalico1MTercerControl, tallaPercentil1MTercerControl, talla1MTercerControl, pesoPercentil1MTercerControl, peso1MTercerControl, diasDeVida1MTercerControl, fecha1MTercerControl, perCefalicoPercentil1MSegundoControl, perCefalico1MSegundoControl, tallaPercentil1MSegundoControl, talla1MSegundoControl, pesoPercentil1MSegundoControl, peso1MSegundoControl, diasDeVida1MSegundoControl, fecha1MSegundoControl, perCefalicoPercentil1MPrimerControl, perCefalico1MPrimerControl, tallaPercentil1MPrimerControl, talla1MPrimerControl, pesoPercentil1MPrimerControl, peso1MPrimerControl, diasDeVida1MPrimerControl, fecha1MPrimerControl, email, password, nombre, dni, fechaNacimiento, pais, provincia, horaNacimiento, tipoDeParto, edadGestacional, apgar, peso, talla, perimetroCefalico, grupoSanguineo, factorRH, reanimacion;
let db = firebase.firestore();
let coleccionDatosNiños = db.collection('datosNiños');
let coleccionControlDeSalud = db.collection('controlDeSalud');
let coleccionControlesDeSalud = db.collection('controlesDeSalud');
