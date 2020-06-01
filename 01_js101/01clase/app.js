//console.log('Reapso JS');


// Variables
// --------
//var nombre = "Alejandro";

let nombre = 'Alejandro';
// console.log(nombre);

const informacionFija = 'Curso FullStack Node';

nombre = 'Gonzalo';
//informacionFija = "Marketing Digital"; No se puede cambiar el contenido de una variable const.

// console.log(nombre);
// console.log(informacionFija);


// Tipos de datos
// --------------
let numeros = 345678;
let strings = 'Hola a todos'; //siempre que hay comillas hay cadena de texto.
let boolean = true;

let array = [ 9876545,
            'hola',
            true,
            ['azul', 'blanco', 'celeste', 'negro']
        ];
// console.log( array[3][1] );

let notAnumber = 23/'u';
let nodefinido;
let nula = null;

let curso = [
    [42, 'caba', 'fullStack', 'alejandro'],
    ['gonza', 23, 'bsas', 'fullStack'],
];

let objetoLiteral = {
    nombre : 'Alejandro',
    edad: 42,
    ciudad: 'caba',
    curso: 'fullstack',
}
 
let alumnos = [
    {
        nombre: 'Alejandro',
        edad: 42,
        ciudad: 'caba',
        curso: 'fullstack',
        saludo : function (){
            return "hola como les va";
        }
    },
    {
        nombre: 'Gonza',
        edad: 42,
        ciudad: 'caba',
        curso: 'fullstack',
        saludo: function () {
            return "hola como les va";
        }
    },
    {
        nombre: 'Alex',
        edad: 42,
        ciudad: 'caba',
        curso: 'fullstack',
        saludo: function () {
            return "hola como les va";
        }
    }, 
    {
        nombre: 'Nacho',
        edad: 42,
        ciudad: 'caba',
        curso: 'fullstack',
        horario : ['8-12', '12-14'],
        saludo: function () {
            return "hola como les va";
        }
    }
];
//console.log(objetoLiteral.nombre);

for (let i=0; i<alumnos.length; i++){
    //console.log(alumnos[i].saludo());
    if(alumnos[i].nombre == 'Gonza'){
        console.log(alumnos[i].edad);
        
    }
}

//console.log(0 == '0'); //true;
//console.log(0 === '0'); //false;

// console.log(nodefinido);
// console.log(nula);


// console.log()
// -------------

//saludar();
//Crear una función
function saludar(){
    let saludo = 'Hola Ale';
    console.log(saludo);
    return saludo;
}


//saludar();
// //saludar();





// Ejecución con Node


// Operadores
// ----------


// Operadores Aritméticos
// ----------------------

// Operadores de comparación
// -------------------------

// Operadores lógicos
// ------------------

// Condicionales
// ------------------

// Bucles
// ------

// For
// ---

// Funciones
// ---------
