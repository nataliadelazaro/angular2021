import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
heroeBorrado: string = '';

borrarHeroe() {
  console.log('borrando...');
  this.heroes.splice(this.heroes.length-1, 1);
}
borrarHeroe2() {
  this.heroeBorrado = this.heroes.shift() || '';
}
}


