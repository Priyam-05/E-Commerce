import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  rating = 0;
  starCount = 5;

  constructor() { }

  ngOnInit(): void {
  }

  returnStar(i:number){
    // if(this.rating >= i+1){
    //   return 'star';
    // }
    // else{
    //   return 'star_border';
    // }
    return 'star_filled';
  }

}
