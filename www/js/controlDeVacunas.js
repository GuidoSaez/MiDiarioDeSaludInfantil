function fnGuardarVacunas(nombreVacuna) {

    let fechaVacuna = $$("#fechaVacuna" + nombreVacuna).val();
    let efectoAdverso = $$("#efectoAdverso" + nombreVacuna).val();
  
    let vacuna = {
      fechaVacuna: fechaVacuna,
      efectoAdverso: efectoAdverso
    }
  
    identificador = dni;
    
  
    firebase.firestore().collection("controlDeVacunas").doc(identificador).collection("vacunas").doc(nombreVacuna).set(vacuna)
    .then ( function(docRef) {
      mainView.router.navigate('/menuPrincipal/')
    })
    .catch (function(error) {
      console.log("error" + error)
    })
  }
  
  function fnVacunas() {
    fnGuardarVacunas("BCG")
    fnGuardarVacunas("HEPATITIS")
    fnGuardarVacunas("NEUMOCOCOCONJUGADA")
    fnGuardarVacunas("QUINTUPLEPENTAVALENTE")
    fnGuardarVacunas("ROTAVIRUS")
    fnGuardarVacunas("IPV")
    fnGuardarVacunas("MENINGOCOCO")
    fnGuardarVacunas("HEPATITISA")
    fnGuardarVacunas("TRIPLEVIRAL")
    fnGuardarVacunas("ANTIGRIPAL")
    fnGuardarVacunas("VARICELA")
    fnGuardarVacunas("FIEBREAMARILLA")
    fnGuardarVacunas("TRIPLEBACTERIANACELULAR")
  }
  