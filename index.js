let numeroDni=+prompt("Ingrese su DNI");
let password=+prompt("Ingrese su clave");

while(numeroDni!=password){
    alert("INCORRECTO..  Ingrese su clave de nuevo!!");
    password=+prompt("Ingrese su clave");
}
//?? Opcion b al acceso con clave..
//const dni=+prompt("Ingrese su DNI")
// let i=0;
// let numero=+prompt("ingrese un numero de 4 digitos");
// let clave=numero+1;
// alert("la clave se genero exitosamente");
// let ingreseClave=+prompt("ingrese la clave generada automaticamente, recuerde lo que el medico le dijo para conocer su CLAVE");
// while(clave!=ingreseClave){
//     alert("acceso denegado");
//     ingreseClave=+prompt("ingrese la clave generada");
// }
//////////////////////////////////////////////////////////////////////////////
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});