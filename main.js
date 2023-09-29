function manu (idAudio1) {
    document.querySelector(idAudio1).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

const classe= lista[Contador].classList[1];

while(Contador < lista.length){
    const classe= lista[Contador].classList[1];
    console.log(classe);
    const idAudio = `#som_${classe}`;
    console.log(idAudio);

    lista[Contador].onclick= function(){ 
        manu(idAudio);
    }
    
    
    Contador = Contador + 1;
    console.log (Contador);
    

}
