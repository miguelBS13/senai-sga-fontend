let mb = parseFloat(prompt("Informe o tamanho do arquivo em MB: "));
let mbp = parseFloat(prompt("Informe a velocidade do link em Mbps: "));
let s1 = mbp/8;
alert("O tempo aproximado de download desse arquivo é de "+((mb/s1)/60).toFixed(2)+" minutos.");