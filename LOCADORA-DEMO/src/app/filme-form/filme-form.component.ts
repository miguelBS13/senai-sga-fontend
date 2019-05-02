import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent{

  titulo = '';
  genero = '';

@Output('filmeAdicionado') filmeAdicionado = new EventEmitter();

  adicionarFilme() {
    const filme = {
      titulo: this.titulo,
      genero: this.genero
    };
    this.filmeAdicionado.emit(filme);
    this.limpar();
  }

  isVazio() {
    if (this.titulo.length === 0 || this.genero.length === 0) {
      return true;
    }
    return false;
  }

  limpar() {
    this.titulo = '';
    this.genero = '';
  }

}
