// console.log("Hola");

//Chequeando teclas presionadas
window.onkeypress = function (evento) {
    console.log(evento.key);
}

//Cambiar colo del título con un click.
let titulo = document.querySelector('h1');

// titulo.onclick = function () {
//     this.style.color = "red";
// }

titulo.addEventListener('click', function(){
    let color = prompt('Elegí un color');
    this.style.color = color;
});


let google = document.querySelector('.google');
google.addEventListener('click', function(e){
    e.preventDefault();
    console.log('nos quedamos acá');
})

