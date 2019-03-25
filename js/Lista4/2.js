let sl = 0;
let ir = 0;
let vli = 0;
let ds = 0;
let ganho = parseFloat(prompt("Quanto você ganha por hora? "));
let hora = parseFloat(prompt("Quantas horas você trabalha por mês? "));

let sb = ganho*hora;

if(sb<=900){
     ir = 0;
     vli = 0;
 }else if(sb<=1500){
     ir = 5;
     vli = sb*0.05;
 }else if(sal<=2500){
     ir = 10;
     vli = sb*0.1;
 }else{
     ir = 20;
     vli = sb*0.2;
 }

let inss = sb*0.1;
let fgts = sb*0.11;
ds = vli+inss;
sl = sb-ds;

alert("+ Salário Bruto: ("+hora+"*"+ganho+"):..................R$"+sb
     +"\n- (-) IR ("+ir+"%):..........................................R$"+vli
     +"\n- (-) INSS (10%):..................................R$"+ inss
     +"\n- FGTS (11%):.......................................R$"+ fgts
     +"\n- Total de descontos:........................R$"+(vli+inss)
     +"\nSalário Líquido : ................................. R$"+ sl);

