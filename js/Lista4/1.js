let sal = parseFloat(prompt("Informe o valor do seu salário:"));
let pc ;
let vl = 0;
let sal1 = 0;

if(sal<280){
    pc= "20%";
    vl = sal*0.2;
    sal1 = (sal+vl);
}else if(sal<700){
    pc= "15%";
    vl = sal*0.15;
    sal1 = (sal+vl);
}else if(sal<1500){
    pc= "10%";
    vl = sal*0.1;
    sal1 = (sal+vl);
}else{
    pc= "5%";
    vl = sal*0.5;
    sal1 = (sal+vl);
}

alert("- Salário antes do reajuste = R$"+(sal).toFixed(2)
    +"\n- Percentual de aumento = "+pc
    +"\n- Valor de aumento = R$"+(vl).toFixed(2)
    +"\n- Novo salário = R$"+(sal1).toFixed(2));