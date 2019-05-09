import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent  {

  pessoas = [
    {
      status: true,
      cidade: 'Uberlândia',
      estado: 'MG',
      nome: 'Manoel Pinheiro'
    },
    {
      status: false,
      cidade: 'São Paulo',
      estado: 'SP',
      nome: 'Sebastião da Silva'
    },
    {
      status: true,
      cidade: 'Florianópolis',
      estado: 'SC',
      nome: 'Caela Souza'
    },
    {
      status: true,
      cidade: 'Curitiba',
      estado: 'PR',
      nome: 'Luís Pereira'
    },
    {
      status: false,
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      nome: 'Vilmar Andrade'
    },
  ];

}
