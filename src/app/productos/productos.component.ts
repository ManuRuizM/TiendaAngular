import { Component } from '@angular/core';
import  {IProductos} from '../shared/interface/productos.interface';
import { ProductService } from '../products.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  buscarTexto: string = '';
  products: IProductos[] = [];

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: IProductos[]) => {
        this.products = data;
        console.log(this.products);
      },
      error => {
        console.error(error);
      }
    );
  }
  openGestion(product: IProductos) {
  this.router.navigate(['/gestion'], {
    state: {
      product
    }
  });
}
}
