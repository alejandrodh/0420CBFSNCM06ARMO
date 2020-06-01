let array = [1, 2, 56, 7, 90, 4, 100];

let mayores50 = array.filter(function (element) {
    return element > 50
});
//console.log(mayores50);

let dobleArray = array.map(function (element) {
    return element > 50
});

//console.log(dobleArray);

let total = array.reduce(function (suma, element) {
    return suma + element
});

//console.log(total);

let carrito = [
    {
        prod: 'remera',
        precio: 10
    },
    {
        prod: 'remera',
        precio: 10
    },
    {
        prod: 'remera',
        precio: 10
    },
    {
        prod: 'zapatos',
        precio: 20
    },
    {
        prod: 'pantalon',
        precio: 20
    },
]

let totalCart = carrito.reduce(function (total, element) {
    return total + element.precio
}, 100);

//console.log(totalCart);

let carritoConDescuento = carrito.map(function (element) {
    if (element.prod === 'remera') {
        return element.precio * 0.5
    }
    return element.precio;

});

//console.log(carritoConDescuento);


carrito.forEach(function (element, i) {
    console.log(i + ' producto: ' + element.prod + ', precio: ' + element.precio)
});

