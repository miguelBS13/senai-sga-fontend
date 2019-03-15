//1
alert("Alo Mundo");

//2
let n = parseFloat(prompt("Digite um número: "));
alert("O número informado foi "+n);

//3
let n1 = parseFloat(prompt("Digite um número: "));
let n2 = parseFloat(prompt("Digite outro número: "));
alert("A soma desses dois números é "+(n1+n2));

//4
let nt1 = parseFloat(prompt("Digite a nota do 1º Bimestre: "));
let nt2 = parseFloat(prompt("Digite a nota do 2º Bimestre: "));
let nt3 = parseFloat(prompt("Digite a nota do 3º Bimestre: "));
let nt4 = parseFloat(prompt("Digite a nota do 4º Bimestre: "));
let media = (nt1 + nt2 + nt3 + nt4)/4;
alert("A média anual é: "+media);

//5
let m = parseFloat(prompt("Digite um número em metros: "));
alert("Esse número em Centímetros é "+m*100);

//6
let r = parseFloat(prompt("Digite o raio de um Círculo: "));
alert("A área desse Círculo é "+3.14*(r*r));

//7
let l = parseFloat(prompt("Digite o valor de um lado de um quadrado: "));
alert("A área desse quadrado é "+l*l+" e o seu dobro é "+l*l*2);

//8
let ganho = parseFloat(prompt("Quanto você ganha por hora? "));
let hora = parseFloat(prompt("Quantas horas você trabalha por mês? "));
alert("Você ganha R$ "+ganho*hora+" por mês.");

//9
let temp = parseFloat(prompt("Digite uma temperatura em Fahrenheit: "));
alert("Essa temperatura em graus Celsius é: "+5*(temp-32)/9);

//10
let cel = parseFloat(prompt("Digite uma temperatura em Celsius: "));
alert("Essa temperatura em graus Fahrenheit é: " + (((cel/5)*9)+32));
