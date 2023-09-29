function manu (idAudio1) {
    document.querySelector(idAudio1).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

const classe= lista[Contador].classList[1];

while(Contador < lista.length){
    const tecla= lista[Contador]
    const classe= tecla[Contador].classList[1];
    //console.log(classe);
    const idAudio = `#som_${classe}`;
    //console.log(idAudio);

    lista[Contador].onclick= function(){ 
        manu(idAudio);
    }
    
    
    Contador = Contador + 1;
    //console.log (Contador);
    tecla.onkeydown = function (evento){
        tecla.classList.add('ativa');
        console.log(evento.cod) } 

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
   
}
