let url = 'https://apis.datos.gob.ar/georef/api/provincias';

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //Acá vamos a trabajar con los datos.
        let total = document.querySelector('.total');
        total.innerHTML += data.cantidad;

        let lista = document.querySelector('.lista');
        let provincias = data.provincias;

        provincias.forEach(function(provincia){
           lista.innerHTML +='<li>'+ provincia.nombre +'</li>'
        })


    })
    .catch( function(e){
        console.log(e);
    })



function nuevoGif(){
    fetch('https://api.giphy.com/v1/gifs/random?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&tag=&rating=g')
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            let url = data.data.images.original.url;
            let gif = document.querySelector('.gif');
            gif.src = url;

            
        })
        .catch(function (e) {
            console.log(e);
        })
}

let pedirGif = document.querySelector('.nuevo');
pedirGif.addEventListener('click', function(e){
    e.preventDefault();
    nuevoGif();
    console.log('pedí un nuevo gif');
})
