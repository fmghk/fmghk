function manu(idAudio1) {
    document.querySelector(idAudio1).play();
}
const listaDeTecla = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTecla.lenght; contador++) {
    const tecla = listaDeTecla[Contador]
    const classe = lista[Contador].classList[1];
    const idAudio = '#som_${classe}'; //template string

    lista[Contador].onclick = function () {
        manu(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
            // console.log(evento.code === 'Space'|| evento.code === 'Enter'); 
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}