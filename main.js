function manu (idAudio1) {
    document.querySelector(idAudio1).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

const classe= lista[Contador].classList[1];

for ( let contador = 0; contador < ListaDeTecla. lenght; contador++){
    const tecla= lista[Contador]
    const classe= lista[Contador].classList[1];
    //console.log(classe);
    const idAudio = `#som_${classe}`;
    //console.log(idAudio);

    lista[Contador].onclick= function(){ 
        manu(idAudio);
    }
    
    
 
    console.log (Contador);
    tecla.onkeydown = function (evento){
if (evento.code === 'Space'|| evento.code === 'Enter')  {
        tecla.classList.add('ativa');
       // console.log(evento.code === 'Space'|| evento.code === 'Enter'); 
}
    
} 

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
   
}
