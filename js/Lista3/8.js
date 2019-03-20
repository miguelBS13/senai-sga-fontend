let n1 = parseFloat(prompt("Digite o preço do produto 1: "));
let n2 = parseFloat(prompt("Digite o preço do produto 2: "));
let n3 = parseFloat(prompt("Digite o preço do produto 3: "));


if(n1<n2 && n1<n3){
    alert("Você deve comprar o 1º produto, de preço R$"+(n1).toFixed(2));    
} else if(n2<n3){
    alert("Você deve comprar o 2º produto, de preço R$"+(n2).toFixed(2));
} else{
    alert("Você deve comprar o 3º produto, de preço R$"+(n3).toFixed(2));
}