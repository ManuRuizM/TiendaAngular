import { IProductos } from './../shared/interface/productos.interface';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  productId: number = 0;
  productName: string = '';
  productPrice: number = 0;
  productDesc: string = '';
  productImage: string = '';
  productRate: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    const product = history.state.product;  
    if (product) {
      this.productId = product.id
      this.productName = product.name;
      this.productPrice = product.price;
      this.productDesc = product.description;
      this.productRate = product.stars;   
      this.productImage = product.image;
    }
  }

  guardar() {
      const producto: IProductos = {
        id: this.productId,
        name: this.productName,
        price: this.productPrice,
        description: this.productDesc,
        stars: this.productRate,
        image: this.productImage
      };
    this.productService.postProduct(producto).subscribe(response => {
      console.log('Respuesta del servidor: ', response);
      alert("Se ha añadido un producto nuevo");
    }, error => {
      console.log('Error al realizar la solicitud: ', error);
    });
  }

  editar() {
    const producto: IProductos = {
      id: this.productId,
      name: this.productName,
      price: this.productPrice,
      description: this.productDesc,
      stars: this.productRate,
      image: this.productImage
    };
    this.productService.putProduct(producto).subscribe(response => {
      console.log('Respuesta del servidor: ', response);
      alert("Se ha modificado el producto");
    }, error => {
      console.log('Error al realizar la solicitud: ', error);
    });
  }
  borrar(){
    const producto: IProductos = {
      id: this.productId,
      name: this.productName,
      price: this.productPrice,
      description: this.productDesc,
      stars: this.productRate,
      image: this.productImage
    };
    this.productService.deleteProduct(this.productId).subscribe(response => {
      console.log('Respuesta del servidor: ', response);
      alert("Se ha borrado el producto");
    }, error => {
      console.log('Error al realizar la solicitud: ', error);
    });

  }
}
