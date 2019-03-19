let qtdLata = 0;
let metros = parseFloat(prompt("Informe quantos m² serão pintados: "));

let x = metros/3;
qtdLata = ((x/18)+1).toFixed(0);

alert("Serão necessárias "+qtdLata+" latas. O custo será de R$"+qtdLata*80);