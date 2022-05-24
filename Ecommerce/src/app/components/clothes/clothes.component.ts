import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/ecommerce';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {

  clothesData: IProduct[];

  constructor(private product: ProductService) { 
    this.clothesData = [];
  }

  ngOnInit(): void {
    this.product.getClothesData().subscribe(data => {
      this.clothesData = data;
      console.log(data);
  })
  }

}
