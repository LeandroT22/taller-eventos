document.addEventListener("DOMContentLoaded", function () {
  let buttonhtml = document.getElementById("boton");

  buttonhtml.addEventListener("click", function () {
    buttonhtml.stopPropagation();
    alert("Hola! Soy el div");
  });

  /* CODIGO NECESARIO EN CASO DE NECESITAR UN RETRASO ENTRE UNA ALERTA Y LA OTRA
 buttonhtml.addEventListener("click", function () {
    setTimeout(function() {
        alert("Hola! Soy el div")
      }, 1500);
  });
  */
});
