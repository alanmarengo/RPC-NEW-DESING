

// expandir imagen
function call_mouseover_expand(id) {
  
    var imagen = document.getElementById(id);
    imagen.style.webkitTransform = "scale(1.1)";
}
function call_mouseout_retroced(id) {
    var imagen = document.getElementById(id);
    imagen.style.webkitTransform = "scale(1)";
}



//MenuBurger
const menuBurger = document.getElementById("MenuBurger");
menuBurger.addEventListener('click',e=>{
    e.preventDefault();
    var x = document.getElementById("menu-burger");
    if (x.style.display === "block") {
      x.style.display = "none";
  
    } else {
      x.style.display = "block";
      
    }
})
//CategoriaBurger
const CategoriaBurger = document.getElementById("misCategoriasMobile");
CategoriaBurger.addEventListener('click',e=>{
    e.preventDefault();
    var x = document.getElementById("categoriaMobile");
    if (x.style.display === "block") {
      x.style.display = "none";
  
    } else {
      x.style.display = "block";
      
    }
})

//   Carrito
function openNavCarrito() {
 
    document.getElementById("SlideCarrito").style.width = "100%";
    document.getElementById("mapita").style.zIndex =  "-1";
    document.getElementById("redline").style.zIndex =" -1";

  }
  
  function closeNavCarrito() {
    document.getElementById("SlideCarrito").style.width = "0";
    document.getElementById("mapita").style.zIndex =  "1";
    document.getElementById("redline").style.zIndex =" 1";
  }

//   ModalCarrito
if(document.getElementById("btnModal")  && localStorage.getItem("productos")!=null ){
    var modal = document.getElementById("tvesModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("closed")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
     
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}

var map = L.map('mapita').setView([-34.601528, -58.375111], 20);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.601528, -58.375111], 20).addTo(map)
    .bindPopup('Galeria Jardin,Local 429')
    .openPopup();




function openPage(pageName,elmnt,color) {
  
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
   
    elmnt.style.backgroundColor = color;
   
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

//acordarse de solucionar el problema de que carguen los comentarios
var comentarios = document.getElementById("comentarios");
comentarios.addEventListener('click',function(e) {
e.preventDefault();

});
var buscador= document.getElementById("form");
buscador.addEventListener('submit',function(e) {
e.preventDefault();
var filtro=document.getElementById("Search-main");
console.log(filtro.value);
var parametro = "tipo";
var valor = "Buscador"
localStorage.setItem(`${parametro}`, `${valor}`);   
var contenido = "contenido";
var valorcontenido = filtro.value;
localStorage.setItem(`${contenido}`, `${valorcontenido}`);
location.href="ProductosListado.html";
});

function ProductosCategoria(valor2) 
{
    var parametro = "tipo";
    var valor = "categoria"
    localStorage.setItem(`${parametro}`, `${valor}`);   
    var contenido = "contenido";
    var valorcontenido = valor2;
    localStorage.setItem(`${contenido}`, `${valorcontenido}`);
    location.href="ProductosListado.html";  
    
    //acordarse de sacar esto
    var productosID = [1,1,1,1,2,2,2,3,4,4,4,4,1,3];
    localStorage.setItem("productos", JSON.stringify(productosID));
    localStorage.setItem("clienteID", 1);
    localStorage.setItem("publicacionID",1);
}
function carritoValores(){
  if(localStorage.getItem("productostotalCantidad") != null &&  localStorage.getItem("productosTotalCarrito")!= null){
    document.getElementById("cantidadCarrito").innerHTML =  `(${localStorage.getItem("productostotalCantidad")}) $${localStorage.getItem("productosTotalCarrito")} `;
  }
  else{
    document.getElementById("cantidadCarrito").innerHTML ="(0) $0,00";
  }
}

carritoValores();