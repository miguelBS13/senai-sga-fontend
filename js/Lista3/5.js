let not1 = parseFloat(prompt("Digite sua 1º nota"));
let not2 = parseFloat(prompt("Digite sua 2º nota"));

let md = (not1+not2)/2;

if(md == 10){
    alert("Aprovado com distinção");
} else if(md >=7){
    alert("Aprovado");
} else {
    alert("Reprovado");
}