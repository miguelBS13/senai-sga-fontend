let quantidade = 20;

//quantidade = 'qualquer'; - não compilada!

let x = [1,2,null];
// x[0] = true; -> Não compilada!

// Contextual Typing
window.onmousedown = function(evento){
    console.log(evento.button); //Ok
    // console.log(evento.buton); Não Compilada!
    
}