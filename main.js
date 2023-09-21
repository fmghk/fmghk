function manu () {
    document.querySelector('#som_tecla_toim').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

const classe= lista [Contador].classList[1];
console.log(classe);


while(Contador < lista.length){

    lista[Contador].onclick=manu;
    const classe= lista [Contador].classList[1];
    console.log(classe);
    Contador = Contador + 1;
    console.log (Contador);
    
}



document.querySelector('.tecla_pom').onclick=manu

