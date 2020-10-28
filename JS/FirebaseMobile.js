var IniciarGoogle = document.querySelector("#IniciarGooglee");
var IniciarFacebook = document.querySelector("#IniciarFacebookk");


//Google login
IniciarGoogle.addEventListener('click', e=>{
    //Al hacer click, se tomar el objeto provider, lo que
    //Hace es decirle que se quiere autenticar con google
   const provider=new firebase.auth.GoogleAuthProvider();
   console.log("click")
   //Ejecuto auth con signwhit para mostrar una ventana de ingreso a google
   auth.signInWithPopup(provider)
   .then(result=>{
        window.location.href ="index.html";
       $('#myModal2').modal('hide');
   })
   .catch(err=>{
       console.log(err)
   })
   
})
//FacebookLogin
IniciarFacebook.addEventListener('click', e=>{
    e.preventDefault();
    const provider =new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
    .then(result=>{
       
        window.location.href ="index.html";
        $('#myModal2').modal('hide');
    })
    .catch(err=> {
        console.log(err)
    })
})

//Eventos
//Observador el cual se encuentra pendiente si alguien se logea
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
   
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      
      loginCheck(user)
      SaveDateUser(user);
      console.log("existe")
    } else {
      // User is signed out.
      // ...
      
      loginCheck(user)
      DeleteDateUser();
    }
  });
  //BotonSalir
  var salir = document.querySelectorAll(".salirApp");
  salir.addEventListener('click', e=>{
      e.preventDefault();
      firebase.auth().signOut().then(function() {
        window.location.href ="index.html";
      }).catch(function(error) {
        alert(err);
      });
    
  })
//Verificar si existe el usuario
var btnSesionOut=  document.querySelectorAll(".login-out");
var btnSesionIn=  document.querySelectorAll(".login-in");

const loginCheck = user =>{
    if(user){
    
        btnSesionIn.forEach(link=> link.style.display='block')
        btnSesionOut.forEach(link=> link.style.display='none')
        
    }
    else{
    
        btnSesionIn.forEach(link=> link.style.display='none')
        btnSesionOut.forEach(link=> link.style.display='block')
      
    }
}

//Almacenar UID del cliente junto con su correo y su foto en el local storage
function SaveDateUser (user)
{
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('Usuario_ID' ,user.uid);
        localStorage.setItem('Name_User',user.displayName);
        localStorage.setItem('Correo_User', user.email);
        localStorage.setItem('Image_user',user.photoURL);
    } else {
       //Este navegador no soporta localstorage
    }
}
function DeleteDateUser(){
    localStorage.clear();
}