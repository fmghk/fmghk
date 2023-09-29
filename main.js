function manu (idAudio) {
    document.querySelector(idAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

const classe= lista [Contador].classList[1];
console.log(classe);


while(Contador < lista.length){

    lista[Contador].onclick= function(){ 
        manu(idAudio);
    }
    
    const classe= lista [Contador].classList[1];
    console.log(classe);
    const idAudio = `#som_${classe}`;
    console.log(idAudio);
    Contador = Contador + 1;
    console.log (Contador);
    

}




document.querySelector('.tecla_pom').onclick=manu

