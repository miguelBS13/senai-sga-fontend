let n1 = parseFloat(prompt("Digite o 1º número: "));
let n2 = parseFloat(prompt("Digite o 2º número: "));
let n3 = parseFloat(prompt("Digite o 3º número: "));

if(n1>n2){
    if(n1>n3){
        if(n2>n3){
            alert("A ordem decrescente é 1 2 3: "+n1+", "+n2+", "+n3+".");
            } else{
                alert("A ordem decrescente é 1 3 2: "+n1+", "+n3+", "+n2+".");
            }
    } else{
        alert("A ordem decrescente é 3 1 2: "+n3+", "+n1+", "+n2+".");  
    }
} else if(n1>n3){
    alert("A ordem decrescente é 2 1 3: "+n2+", "+n1+", "+n3+".");
    } else if(n2>n3){
        alert("A ordem decrescente é 2 3 1: "+n2+", "+n3+", "+n1+".");
        } else{
            alert("A ordem decrescente é 3 2 1: "+n3+", "+n2+", "+n1+".");
        } 
   
