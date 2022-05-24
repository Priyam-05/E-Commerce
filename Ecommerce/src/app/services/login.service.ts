import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  email!: string;
  password!: string;
  matched!: boolean;
  match = new Subject<boolean>();
  hide = new Subject<boolean>();
  id!: number;
  private data: any = [];

  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private product: ProductService) {
    this.hide.next(false);
  }

  // getUsers() {
  //   return this.product.getRegisterData();
  // }

  getList() {
    this.product.getRegisterData().subscribe((data) => {
      this.data = data;
    });
    console.log(this.data);
  }

  getCurrentData(data: any) {
    this.email = data.email;
    this.password = data.password;
    console.log(`Email: ${this.email} \n Password: ${this.password}`);
  }

  checkMatch() {
    let len = this.data.length;

    //Compare email and password
    for (let val = 0; val < len; val++) {
      if (
        this.data[val].email === this.email &&
        this.data[val].password === this.password
      ) {
        this.id = this.data[val].id;
        this.matched = true;
        console.log('Matched Data');
        break;
      } 
      
      //Wrong password 
      else if (
        this.data[val].email === this.email &&
        this.data[val].password != this.password
      ) {
        this.matched = false;
        this._snackBar.open('Wrong Password!!', 'Try Again', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        break;
      } 

      //account does not exist
      else {
        this.matched = false;
        this._snackBar.open('Account does not exist!!', 'Try Again', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    }
    this.match.next(this.matched);
  }
}