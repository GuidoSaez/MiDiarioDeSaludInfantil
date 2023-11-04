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