function fnControlDeSalud(control) {
    let fecha = $$("#fecha" + control).val();
    let diasDeVida = $$("#diasDeVida" + control).val();
    let peso = $$("#peso" + control).val();
    let pesoPercentil = $$("#pesoPercentil" + control).val();
    let talla = $$("#talla" + control).val();
    let tallaPercentil = $$("#tallaPercentil" + control).val();
    let perimetroCefalico = $$("#perCefalico" + control).val();
    let perimetroCefalicoPercentil = $$("#perCefalicoPercentil" + control).val();
    let fibrosisQuistica = $$("#fibrosisQuistica" + control).val();
    let deficitBiotinidasa = $$("#defiBiotinidasa" + control).val();
    let fenilcetonuria = $$("#fenilcetonuria" + control).val();
    let galactosemia = $$("#galactosemia" + control).val();
    let hiperSupraCongenita = $$("#hiperSupraConge" + control).val();
    let hipoCongenito = $$("#hipoConge" + control).val();
    let otoAcusticas = $$("#otoAcusticas" + control).val();
    let reflejoOjoRojo = $$("#reflejoOjoRojo" + control).val();
    //let alimentacionComplementaria = $$("#" + control).val();

    let controles = {
        email: email,
        fecha: fecha,
        diasDeVida: diasDeVida,
        peso: peso,
        pesoPercentil: pesoPercentil,
        talla: talla,
        tallaPercentil: tallaPercentil,
        perimetroCefalico: perimetroCefalico,
        perimetroCefalicoPercentil: perimetroCefalicoPercentil,
        fibrosisQuistica: fibrosisQuistica,
        deficitBiotinidasa: deficitBiotinidasa,
        fenilcetonuria: fenilcetonuria,
        galactosemia: galactosemia,
        hiperSupraCongenita: hiperSupraCongenita,
        hipoCongenito: hipoCongenito,
        otoAcusticas: otoAcusticas,
        reflejoOjoRojo: reflejoOjoRojo
    }

    let identificador = dni;

    firebase.firestore().collection("controlDeSalud").doc(identificador).collection("controles").doc(control).set(controles)
    .then ( function(docRef) {
      mainView.router.navigate('/menuPrincipal/')
    })
    .catch (function(error) {
      console.log("error" + error)
    })
}
  
function fnControles(){
  fnControlDeSalud("PRIMERCONTROL")
  fnControlDeSalud("SEGUNDOCONTROL")
  fnControlDeSalud("TERCERCONTROL")
}