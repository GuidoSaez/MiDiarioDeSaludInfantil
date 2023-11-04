// COLECCIONES 

let db = firebase.firestore();
let coleccionDatosDeNiños = db.collection('datosDelNiño');
let coleccionAntecedentesPerinatales = db.collection('antecedentesPerinatales')
let coleccionControlDeSalud = db.collection('controlDeSalud');
let coleccionControlDeVacunas = db.collection('controlDeVacunas');




// VARIABLES

let email;
let password;

// VARIABLES REGISTRO DEL NIÑO

let nombre; 
let dni; 
let fechaNacimiento;
let pais;
let provincia;
let ciudad;
let horaNacimiento;
let tipoDeParto;
let edadGestacional;
let apgar;
let peso;
let talla;
let perimetroCefalico;
let grupoSanguineo;
let factorRH;
let reanimacion;