interface Pessoa{
    idade: number;
    // ? = Não é obrigatório
    sexo?: string;
}

function imprimirIdade(pessoa: Pessoa){
    console.log(pessoa.idade);    
}

let joaoMarcos = {nome: 'João Marcos', idade: 27}

imprimirIdade(joaoMarcos);