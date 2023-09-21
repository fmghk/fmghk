function manu (idAudio) {
    document.querySelector(idAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

const classe= lista [Contador].classList[1];
console.log(classe);


while(Contador < lista.length){

    lista[Contador].onclick= function(){ manu('#som_tecla_toim');}
    const classe= lista [Contador].classList[1];
    console.log(classe);
    Contador = Contador + 1;
    console.log (Contador);
    
}



document.querySelector('.tecla_pom').onclick=manu

