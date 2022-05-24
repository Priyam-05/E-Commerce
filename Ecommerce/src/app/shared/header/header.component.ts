import { ProductService } from 'src/app/services/product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBar = new EventEmitter();
  items: number | undefined;

  constructor(private product: ProductService) {
    this.product.items.subscribe(data => {
      this.items = data;
    })
   }

  ngOnInit(): void {
    
  }

  toggle(){
    this.toggleSideBar.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
  }

}
