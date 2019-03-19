let Lt1 = 0;
let Galeao = 0;
let valorlt = 0;
let valorgl = 0;
let ct1 = 0;
let ct2 = 0;
let me1 = parseFloat(prompt("Informe quantos m² serão pintados:"));

 let y = me1/6;
 alert(y+"x");

 Lt1 = ((y/18)+0.5).toFixed(0);
 Galeao = ((y/3.6)+0.5).toFixed(0);
 valorlt = (Lt1*80).toFixed(2);
 valorgl = (Galeao*25).toFixed(2);

do{
    if(y>=18){
        ct1++;
        y = y-18;
    } else if(y<18){
        if(y>=3.6){
            ct2++;
            y = y - 3.6;
        } else if(y<3.6){ 
            ct2++;
            y = y - y;
        }
    }
} while(y>0);

let valor1= ct1*80;
let valor2= ct2*25;
let valor3= (valor1+valor2).toFixed(2);
 
alert("Você tem as seguintes opções \n -Comprando "+Lt1+" lata(s) você pagará R$"+valorlt
     +"\n-Comprando "+Galeao+" galão(s) você pagará R$"+valorgl
     +"\n-E a opção mais barata. Comprando "+ct1+" lata(s) e "+ct2+" galão(s) você pagará R$"+valor3);
