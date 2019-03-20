let letra = prompt("Digite uma letra: ");

switch(letra){
    case "a": case "e": case "i": case "o": case "u":
        alert("Vogal");
    break;
    default:
        alert("Consoante");
    break;
}