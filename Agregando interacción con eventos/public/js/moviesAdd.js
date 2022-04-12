window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let $input = document.querySelector('#titulo');


    function colorAlAzar(...colores){
        let random = Math.floor((Math.random() * (5-0))+0);
        let colorRandom = colores[random]
        return colorRandom
    } 

    titulo.addEventListener('mouseover', ()=>{
        titulo.style.color = colorAlAzar('red', 'blue', 'orange', 'brown', 'yellow'); 
    })

    
    /* $input.addEventListener('keypress', (e)=>{
        let estadoSecreto = 0;
        console.log(e.key)
        switch(estadoSecreto){
            case 0:
                e.key == 's' ? estadoSecreto = 1 : estadoSecreto = 0;
                console.log(estadoSecreto);
                break;
            case 1:
                e.key == 'e' ? estadoSecreto = 2 : estadoSecreto = 0;
                console.log(estadoSecreto);
                break;
            case 2:
                e.key == 'c' ? estadoSecreto = 3 : estadoSecreto = 0;
                console.log(estadoSecreto);
                break;
            case 3:
                e.key == 'r' ? estadoSecreto = 4 : estadoSecreto = 0;
                console.log(estadoSecreto);
                break;
            case 4:
                e.key == 'e' ? estadoSecreto = 5 : estadoSecreto = 0;
                console.log(estadoSecreto);
                break;
            case 5:
                e.key == 't' ? estadoSecreto = 6 : estadoSecreto = 0;
                console.log(estadoSecreto);
                break;
            case 6:
                if(e.key == 'o'){
                    alert('SECRETO MAGICO')
                    estadoSecreto = 0;
                }            
        }
    }) */

    let $inputTitle = document.querySelector('#titulo');
    let estadoSecreto = 0;
    
    $inputTitle.addEventListener('keydown', (event) => {
        switch (true) {
            case event.key == "s" && estadoSecreto == 0:
                estadoSecreto = 1;
                break;
            case event.key == "e" && estadoSecreto == 1:
                estadoSecreto = 2;
                break;
            case event.key == "c" && estadoSecreto == 2:
                estadoSecreto = 3;
                break;
            case event.key == "r" && estadoSecreto == 3:
                estadoSecreto = 4;
                break;
            case event.key == "e" && estadoSecreto == 4:
                estadoSecreto = 5;
                break;
            case event.key == "t" && estadoSecreto == 5:
                estadoSecreto = 6;
                break;
            case event.key == "o" && estadoSecreto == 6:
                estadoSecreto = 0;
                alert("SECRETO MÁGICO")
                break;
                default: 
                estadoSecreto = 0;
        }
    })

}


/* ● En moviesAdd.ejs, establecer que, cada vez que se pase el mouse por el título
'AGREGAR PELÍCULA', este cambie su color.
*/