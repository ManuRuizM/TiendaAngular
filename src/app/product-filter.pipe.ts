import { Pipe, PipeTransform } from '@angular/core';
import { IProductos } from './shared/interface/productos.interface';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProductos[], buscarTexto?: string): IProductos[] {  // no se requiere el input del buscador
    if (!buscarTexto) { // si el input esta vacio se devuelve todos los productos
      return value;
    }
    return value.filter((product) => { // si no se filtra
      return product.name.toLowerCase().includes(buscarTexto.toLowerCase());
    });
  }
}
