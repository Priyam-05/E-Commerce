import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/ecommerce';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  booksData: IProduct[];

  constructor(private product: ProductService) { 
    this.booksData = [];
  }

  ngOnInit(): void {
    this.product.getBooksData().subscribe(data => {
      this.booksData = data;
      console.log(data);
    })
  }

}
