import { ProductService } from 'src/app/services/product.service';
import { IProduct } from './../../ecommerce';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: IProduct[];
  @Input() i: number = 0;
  cartItems: IProduct[];

  constructor(private _snackBar: MatSnackBar, private product: ProductService) {
    this.data = [];
    this.cartItems = [];
   }

  ngOnInit(): void {
    this.product.getCartData().subscribe(data => {
      this.cartItems = data;
    });
    
    setTimeout(() => {
      console.log(this.cartItems.length);
      this.product.items.next(this.cartItems.length);
    },500)
  }

  addToCart(id: number) {


    //Check If item exists in cart
    let flag = 0

    for(let i=0; i < this.cartItems.length ; i++){
       if(this.cartItems[i].id == id) {
         flag = 1;
       }
    }

    if(flag == 1){
      this._snackBar.open('Already added to Cart !!','Okay',{
        panelClass: ['snackbar'],
      });
    }

    //Add new Item
    else{
      let newData: IProduct = {
        id: 0,
        title: "",
        img: "",
        type: "",
        rating: 0,
        cartValue: 1,
        price: 100
      };
      
      for(let i=0; i < this.data.length ; i++){
        if(this.data[i].id == id) {
          newData = this.data[i];
        }
      }
  
      //console.log(newData)
      this.product.postCartData(newData).subscribe(data => {
        console.log(data);

        this.ngOnInit(); // so that cart items gets refreshed

        //Snack Bar
        this._snackBar.open('Added to Cart Successfully !!','Done',{
          duration: 3000,
          panelClass: ['snackbar'],
        });
        // console.log(this.cartItems.length)
        // this.product.items.next(this.cartItems.length);
      },
      error => {
        this._snackBar.open('Some Error Occured !!','OK',{
          panelClass: ['snackbar'],
        });
      });

    }

  }
}

function run() {
  throw new Error('Function not implemented.');
}

