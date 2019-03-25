function limpar(){
    let nome = document.getElementById("nome");
    nome.value = "";
    nome.focus();

    let idade = document.getElementById("idade");
    idade.value = "18";
    


}


function salvar(){
    let nome = document.getElementById("nome");
    let txt = document.getElementsByTagName("td");
    txt[0].innerHTML = nome.value;


    let idade = document.getElementById("idade");
    txt[2].innerHTML = idade.value;

}

// let paragrafos = document.getElementsByTagName("p");

// paragrafos[0].innerHTML = "Paragrafo modificado";
// alert(paragrafos[0].innerHTML);