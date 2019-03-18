//1
let n1 = parseFloat(prompt("Digite um número inteiro: "));
let n2 = parseFloat(prompt("Digite outro número inteiro: "));
let n3 = parseFloat(prompt("Digite um número real: "));

alert("Resposta a: "+((n1*n1)+(n2/2))
    +"\nResposta b: "+((n1*n1*n1)+n3)
    +"\nResposta c: "+ n3*n3*n3);

 //2
 let altura = parseFloat(prompt("Digite sua altura: "));
 alert("Seu peso ideal é "+((72.7*altura)-58));

//3
let sex = prompt("Digite seu sexo: ");

 if(sex =="homem"){
     let h = parseFloat(prompt("Digite sua altura: "));
     alert("Seu peso ideal é "+((72.7*h)-58));
 } else if(sex == "mulher"){
     let h = parseFloat(prompt("Digite sua altura: "));
    alert("Seu peso ideal é "+((62.1*h)-44.7));
 }

//4
 let peso = parseFloat(prompt("João, quantos quilos você trouxe? "));
 alert("João, você passou "+(peso-50)+" kg do peso estabelecido."
     +"\nVocê terá que pagar R$"+(peso-50)*4+" pelo excesso.");

//5
let ganho1 = parseFloat(prompt("Quanto você ganha por hora? "));
let hora1 = parseFloat(prompt("Quantas horas você trabalha por mês? "));
let sr = ganho1*hora1;
let ir = (ganho1*hora1)*0.11;
let ins = (ganho1*hora1)-0.08;
let sd = (ganho1*hora1)-0.05;
let sl = sr-ir-ins-sd;

alert("+ Salário Bruto: R$"+ sr
     +"\n- IR (11%) : R$"+ ir
     +"\n- INSS (8%) : R$"+ ins
     +"\n- Sindicato (5%) : R$"+ sd
     +"\n= Salário Líquido : R$"+ sl);

//6
let metros = parseFloat(prompt("Informe quantos m² serão pintados: "));
let x = metros/3;

let qtdLata = (x/18)+1;
let preco = qtdLata*80;