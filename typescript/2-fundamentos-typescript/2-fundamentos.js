// var, let e const
function iniciarTime(iniciarJogo) {
    var nome = 'Messi e seus amigos';
    var cidade = 'São Paulo';
    if (iniciarJogo) {
        cidade = 'Natal';
    }
    console.log(nome + " v\u00E3o jogar em " + cidade);
}
iniciarTime(false);
