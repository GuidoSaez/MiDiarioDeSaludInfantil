function fnAgregarConsulta() {
    let fechaActual = new Date();
    let dia = fechaActual.getDate().toString().padStart(2, '0');
    let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    let anio = fechaActual.getFullYear();
    let fecha = dia + '/' + mes + '/' + anio;
    mensajeConsulta = $$("#mensajeConsulta").val()

    let consulta = {
        fecha: fecha,
        consulta: mensajeConsulta
    }

    let identificador = email

    firebase.firestore().collection("consultasMedicas").doc(identificador).collection("consultas").doc(email).set(consulta)
    .then ( function(docRef) {
        console.log("Se agrego la consulta");
        $$("#mensajeConsulta").val("");
        mainView.router.navigate('/consultasMedicas/');
    })
    .catch (function(error) {
        console.log("error" + error)
    })
}

function fnCrearConsulta(){
    console.log("fnCrearConsulta fue llamada");
    mainView.router.navigate('/crearConsultaMedica/');
}

function fnMostrarConsultaMedica(){
    firebase.firestore().collection("consultasMedicas").doc(email).collection("consultas").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let datosConsulta = doc.data();
            let consulta = "<div class='card-header'>"+ datosConsulta.fecha +"</div><div class='card-content card-content-padding'>" + datosConsulta.consulta + "</div>"
            $$("#contenedorConsultasMedicas").append(consulta);
        })
    })
    .catch(function(error) {
        console.error("Error al recuperar notas: ", error);
    });
}
