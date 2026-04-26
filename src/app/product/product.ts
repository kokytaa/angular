import { Component ,OnInit} from '@angular/core';
import { NgForOf} from '@angular/common';
import { ProductService } from '../services/productservice';
@Component({
  selector: 'app-product',
  imports: [NgForOf],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone:true
})
export class Product implements OnInit {
     products: Array<any> =[]; // products! ou products: any

    constructor(private  productService: ProductService) {
    }

    ngOnInit(): void {
      this.getAllProducts();
       }
    getAllProducts(){
        this.productService.getAllProducts().subscribe({
                                                                next: resp=>{
                                                                  this.products = resp;
                                                                },
                                                                error: err => {
                                                                  console.log(err);
                                                                } });
      }
     handleDelete(product: any){
        let v = confirm('etes vous sur de vouloire supprimer?');
        if(v== true){
              this.productService.deleteProduct(product).subscribe({
                                                               next: resp=>{
                                                                 this.getAllProducts();
                                                               },
                                                               error: err => {
                                                                 console.log(err);
                                                               }
                                                             });

         }

     }
 }
