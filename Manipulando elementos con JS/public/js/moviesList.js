function qs (element){
    return document.querySelector(element)
}

let $body = qs('body');
let $h1 = qs('h1');

let modoOscuro = confirm('¿Desea modo oscuro?');

if(modoOscuro) {
    $body.style.backgroundColor = '#7f7f7f';
    $body.classList.add('fondoMoviesList');
}

$h1.innerText = 'LISTADO DE PELICULAS';
$h1.style.color = 'white';
$h1.style.backgroundColor = 'teal';
$h1.style.fontSize = '20px';
