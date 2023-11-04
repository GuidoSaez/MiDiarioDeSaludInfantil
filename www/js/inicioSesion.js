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