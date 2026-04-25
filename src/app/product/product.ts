import { Component ,OnInit} from '@angular/core';
import { NgForOf} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [NgForOf],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone:true
})
export class Product implements OnInit {
     products: Array<any> =[]; // products! ou products: any

    constructor() {
    }

    ngOnInit(): void {
  this.products=[
    {id:1,name : "computer",price:2300,selected:true},
    {id:2,name : "printer",price:1200,selected:false},
    {id:3,name : "smartphone",price:3000,selected:true}]}

     handleDelete(product: any) {
        let v = confirm('etes vous sur de vouloire supprimer?');
        if(v== true){
         this.products = this.products.filter((p:any) => p.id != product.id)

         }

}
 }
