function fnAgregarNota() {
    let fechaActual = new Date();
    let dia = fechaActual.getDate().toString().padStart(2, '0');
    let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    let anio = fechaActual.getFullYear();
    let fecha = dia + '/' + mes + '/' + anio;
    mensajeNota = $$("#mensajeNota").val()
    
    
    
    let notas = {
        fecha: fecha,
        nota: mensajeNota
    }

    identificador = email

    firebase.firestore().collection("notas_observaciones").doc(identificador).collection("notas").add(notas)
    .then ( function(docRef) {
        console.log("Se agrego la nota");
        $$("#mensajeNota").val("");
        mainView.router.navigate('/notas_observaciones/');
    })
    .catch (function(error) {
        console.log("error" + error)
    })

    
}

function fnCrearNotas(){
    mainView.router.navigate('/crearNota/');
}

function fnMostrarNota(){
    firebase.firestore().collection("notas_observaciones").doc(email).collection("notas").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let datosNota = doc.data();
            let nota = "<div class='card-header'>"+ datosNota.fecha +"</div><div class='card-content card-content-padding'>" + datosNota.nota + "</div>"
            $$("#contenedorNotas").append(nota);
        })
    })
    .catch(function(error) {
        console.error("Error al recuperar notas: ", error);
    });
}
