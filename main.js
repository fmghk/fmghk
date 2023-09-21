function manu () {
    document.querySelector('#som_tecla_toim').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

const classe= lista [5].classList[1];
console.log(classe);


while(Contador < 9){

    lista[Contador].onclick=manu;
    Contador = Contador + 1;
    console.log (Contador);
}



document.querySelector('.tecla_pom').onclick=manu

