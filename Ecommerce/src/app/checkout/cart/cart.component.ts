import { ProductService } from 'src/app/services/product.service';
import { IProduct } from './../../ecommerce';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  data: IProduct[];
  
  subTotal: number = 0;
  delivery: number = 0;
  discount: number = 0;
  total: number = 0;

  constructor(private product: ProductService) {
      this.data = [];
   }

  ngOnInit(): void {
    this.product.getCartData().subscribe(data => {
      this.data = data;
      this.product.items.next(this.data.length);
      this.summary();
    });
  }

  removeFromCart(id: number){
    this.product.deleteFromCart(id).subscribe(data => {
      console.log(data);
      window.location.reload();
    });
  }

  increment(data: IProduct){  
      data.cartValue++;
      this.summary();
  }

  decrement(data: IProduct){
    if(data.cartValue == 1){
      data.cartValue = 1
    }
    else{
      data.cartValue--;
      this.summary();
    }  
  }

  deleteAll(){
    for(let i=0; i < this.data.length; i++){
      this.product.deleteFromCart(this.data[i].id).subscribe(data => {
        console.log(data);
      })
    }
    window.location.reload();
  }

  summary(){

    if(this.data.length == 0){
      this.subTotal = 0;
      this.delivery = 0;
      this.discount = 0;
      this.total = 0;
    }
    else{
      //Sub Total
      this.subTotal = 0;
      for(let i=0; i < this.data.length ; i++){
        this.subTotal += (this.data[i].cartValue * this.data[i].price);
      }

      //Delivery
      if(this.subTotal > 5000){
        this.delivery = 0;
      }
      else{
        this.delivery = 50;
      }

      //Discount
      if(this.subTotal > 100000){
        this.discount = 11000;
      }
      else if (this.subTotal > 50000){
        this.discount = 9000;
      }
      else if (this.subTotal > 25000){
        this.discount = 4000;
      }
      else if (this.subTotal > 15000){
        this.discount = 1500;
      }
      else if (this.subTotal > 10000){
        this.discount = 500;
      }
      else{
        this.discount = 0;
      }

      //Total
      this.total = ( this.subTotal + this.delivery ) - this.discount;
  }
      
  }

}
