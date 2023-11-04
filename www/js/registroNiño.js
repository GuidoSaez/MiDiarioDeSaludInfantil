function fnRegistroNiño() {
  
  nombre = $$("#nombre").val()
  apellido = $$("#apellido").val()
  dni = $$("#dni").val()
  fechaNacimiento = $$("#fechaNacimiento").val()
  pais = $$("#pais").val()
  provincia = $$("#provincia").val()
  ciudad = $$("#ciudad").val()
  horaNacimiento = $$("#horaNacimiento").val()
  tipoDeParto = "";
  if ($$("#tipoPartoCesarea").is(":checked")) {
    tipoDeParto = "Cesarea";
  } else if ($$("#tipoPartoNormal").is(":checked")) {
    tipoDeParto = "Normal";
  } else if ($$("#tipoPartoForceps").is(":checked")) {
    tipoDeParto = "Forceps u otro";
  }
  edadGestacional = $$("#edadGestacional").val()
  apgar = $$("#apgar").val()
  peso = $$("#peso").val()
  talla = $$("#talla").val()
  perimetroCefalico = $$("#perimetroCefalico").val()
  grupoSanguineo = $$("#grupoSanguineo").val()
  factorRH = $$("#factorRH").val()
  reanimacion = "";
  if ($$("#reanimacionSI").is(":checked")) {
    reanimacion = "Si";
  } else if ($$("#reanimacionNO").is(":checked")) {
    reanimacion = "No";
  }
  
  let datosDelNiño = {
    email: email,
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    fechaNacimiento: fechaNacimiento,
    pais: pais,
    provincia: provincia,
    ciudad: ciudad,
    horaNacimiento: horaNacimiento,
  };

  let antecedentesPerinatales = {
    tipoDeParto: tipoDeParto,
    edadGestacional: edadGestacional,
    apgar: apgar,
    peso: peso, 
    talla: talla,
    perimetroCefalico: perimetroCefalico,
    grupoSanguineo: grupoSanguineo,
    factorRH: factorRH,
    reanimacion: reanimacion
  };

  let identificador = email
  let identificador2 = dni

  firebase.firestore().collection("datosDelNiño").doc(identificador).set(datosDelNiño)
  .then ( function(docRef) {
    firebase.firestore().collection("datosDelNiño").doc(identificador).collection("antecedentesPerinatales").doc(identificador2).set(antecedentesPerinatales)
    .then(function(subDocRef) {
      mainView.router.navigate('/menuPrincipal/');
    })
    .catch(function(subDocError) {
      console.error("Error al agregar documento de antecedentesPerinatales: ", subDocError);
    });
    
  })
  .catch (function(error) {
    console.log("error" + error)
  })
} 