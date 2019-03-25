// let cars = {
//    gm: ["Corsa","Classic","Prisma"],
//    fiat: ["Palio","Uno","Toro"],
//    renau: ["Clio","Duster", "logan"]
// };

// alert(cars["gm"][2]);


// ex2
// let paragrafos = document.getElementsByTagName("p");

// paragrafos[0].innerHTML = "Paragrafo modificado";
// alert(paragrafos[0].innerHTML);

function testar(){
    let nome = document.getElementById("nome");
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = nome.value;
}

function limpar(){
    let nome = document.getElementById("nome");
    nome.value = "";
    nome.focus();
}