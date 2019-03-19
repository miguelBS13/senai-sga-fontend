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