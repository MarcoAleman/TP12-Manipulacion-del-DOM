function qs (element) {
    return document.querySelector(element)
}

let $main = qs('main');
let $h2 = qs('h2');
let $a = qs('a');
let $p = document.querySelectorAll('p');
let $body = qs('body');

let nombre = prompt('Ingrese su nombre') || 'Invitad@';

if (nombre == '') {
    $h2.innerText += (' Invitado');
} else {
    $h2.innerText += (` ${nombre.trim()}`);
}

$h2.style.textTransform = 'uppercase';
$a.style.color = '#E51B3E';

let fondo = confirm('¿Desea colocar un fondo de pantalla?');

//fondo ? $body.classList.add('fondo') : "";
fondo && $body.classList.add('fondo');

$p.forEach((element, index)=>{
    if(index % 2 == 0) {
        element.classList.add('destacadoImpar')
    } else {
        element.classList.add('destacadoPar')
    }
})

$main.style.display = 'block';

/*Desde el archivo /public/js/index.js, capturar los siguientes elementos: <main>,
<h2>, <a> y <p>, ubicados en el archivo: /views//index.ejs..

● A todos los párrafos que fueron capturados, asignar a los pares la clase:
“descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”.
● Finalmente, establecer como visible a la etiqueta <main> en el browser o
navegador, aplicando el estilo: display : block.*/