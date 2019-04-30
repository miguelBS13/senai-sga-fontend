// var, let e const

function iniciarTime(iniciarJogo: Boolean){
    const nome = 'Messi e seus amigos';
    let cidade = 'São Paulo';

    if(iniciarJogo){
        cidade = 'Natal';
    }
    
    console.log(`${nome} vão jogar em ${cidade}`);
    
}

iniciarTime(false);