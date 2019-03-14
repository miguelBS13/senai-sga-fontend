// alert("Olá Mundo");

// let nome = "Miguel Barbosa";
// let idade = 17;

// alert(nome + idade);

// i++; //i = i + 1
// i+=2; // i = i + 2

//parseFloat (String para decimal)
//parseInt (String para inteiro)

// let nome = prompt("Digite seu nome: ");
// let idade = prompt("Infome sua idade: ");
//  alert("Olá " + nome + ", Bem Vindo ao nosso site!")
// confirm("Suas informações estão certas?");

// var n1 = parseFloat(prompt("Digite a nota 1: "));
// var n2 = parseFloat(prompt("Digite a nota 2: "));
// var n3 = parseFloat(prompt("Digite a nota 3: "));

// var media = (n1 + n2 + n3)/3;

// alert("A média é: "+media);

//1
let sla = 15*8;

alert(sla);

//2
let nome = prompt("Digite seu nome: ");
alert("Olá " + nome + ", Bem Vindo ao nosso site!");

//3
let A = parseFloat(prompt("Quantos votos o candidato A recebeu? "));
let B = parseFloat(prompt("Quantos votos o candidato B recebeu? "));

let total = A + B;


alert("O percentual da quantidade de Votos do Candidato A foi "+(A/total)*100+"% \n O percentual da quantidade de Votos do Candidato B foi "+(B/total)*100+"%");

//4
let grao = parseFloat(prompt("Quantos grãos um animal come por dia? "));
let estoque = parseFloat(prompt("Quantos grãos ainda tem no estoque? "));

alert("O animal tem "+estoque/grao+" dia(s) de suprimento.");

//5
let cigarro = parseFloat(prompt("Quantos cigarros você fuma por dia? "));
let custo = parseFloat(prompt("Quanto custa um cigarro ? "));
let anos = parseFloat(prompt("A quantos anos fuma? "));

let C = (cigarro*custo)*(anos*365);

alert("O seu custo com cigarros foi de R$"+C);
alert
