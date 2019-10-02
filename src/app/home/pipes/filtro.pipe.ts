import { Home } from './../models/home.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(nome : Home[], texto?: string): Home[] {
    if (texto.length === 0) {
      return nome;
    } 
    texto = texto.toLocaleLowerCase();

    return nome.filter( nomePac => {
      return nomePac.nome.includes(texto);
    });
  }

}
