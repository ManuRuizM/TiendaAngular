import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Item{
  id:number,
  nombre: string,
  clase:string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 
  items:Item[]=[
    {
      id:1, nombre: 'elemento1', clase: ''
    },
    {
      id:2, nombre: 'elemento2', clase:''
    },
    {
      id:3, nombre: 'elemento3', clase:''
    }
  ] 
  itemSeleccionado: number = 0;

  cambiarClase(nuevaClase: string, item:number): void {
    if(this.itemSeleccionado !== 0){ // se restablece la clase a los elementos
       this.items.forEach(elemento => {
        if(elemento.id !== item){
            elemento.clase = 'tab-list'; // se deja la clase por defecto
        }
       })
    }
    const elementoSeleccionado = this.items.find(elemento => elemento.id === item); // se cambia la clase por la nueva
    if (elementoSeleccionado) {
      elementoSeleccionado.clase = nuevaClase;
      this.itemSeleccionado = item;
    }
  }
}

