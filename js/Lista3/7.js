let n1 = parseFloat(prompt("Digite o 1º número: "));
let n2 = parseFloat(prompt("Digite o 2º número: "));
let n3 = parseFloat(prompt("Digite o 3º número: "));

if(n1>n2 && n1>n3){
    alert("O número maior é o 1º: "+n1);    
} else if(n2>n3){
    alert("O número maior é o 2º: "+n2);
} else{
    alert("O número maior é o 3º: "+n3);
}

if(n1<n2 && n1<n3){
    alert("O número menor é o 1º: "+n1);    
} else if(n2<n3){
    alert("O número menor é o 2º: "+n2);
} else{
    alert("O número menor é o 3º: "+n3);
}