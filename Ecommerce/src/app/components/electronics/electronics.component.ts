import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/ecommerce';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  electronicsData: IProduct[];

  constructor(private product: ProductService) { 
    this.electronicsData = [];
  }

  ngOnInit(): void {
    this.product.getElectronicsData().subscribe(data => {
        this.electronicsData = data;
        console.log(data);
    })
  }

}
