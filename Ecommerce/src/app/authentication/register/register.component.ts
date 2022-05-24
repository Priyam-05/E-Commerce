import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;
  hidePass = true;
  data!: boolean;
  name!:string;
  email!:string;
  password!:string;
  public login:any;
  phone!:number;
  dob!:string;
  gender!:string
  public loginValid = true;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private product: ProductService,
    private loginSer: LoginService
  ) {}

  ngOnInit(): void {
   this.registerForm = this.formBuilder.group({
     name:[''],
     email:[''],
     password:[''],
     phone:[''],
     dob:['']
   })
  }

  onSubmit() {
    this.product.postRegisterData(this.registerForm.value).subscribe(data => {
      alert("Success");
      this.registerForm.reset();
      this.router.navigate(['login']);
      // this.loginSer.hide.next(true);
    },
    err=>{
      alert("wrong");
    })
  }
}