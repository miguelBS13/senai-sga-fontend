let turno = prompt("Informe seu turno: \n M - Matutino\n V - Vespertino\n N - Noturno");

switch(turno){
    case "M":
    alert("Bom dia!");
    break;
    case "V":
    alert("Boa Tarde!");
    break;
    case "N":
    alert("Boa Noite!");
    default:
    alert("Turno Inválido");
    break;
}