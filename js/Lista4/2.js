let ganho = parseFloat(prompt("Quanto você ganha por hora? "));
let hora = parseFloat(prompt("Quantas horas você trabalha por mês? "));

let sb = ganho*hora;



let inss = sb*0.1;
let fgts = sb*0.11;
let sl = sr-ir-inss+fgts;

alert("+ Salário Bruto: R$"+ sr
     +"\n- IR (11%) : R$"+ ir
     +"\n- INSS (8%) : R$"+ ins
     +"\n- Sindicato (5%) : R$"+ sd
     +"\n= Salário Líquido : R$"+ sl);