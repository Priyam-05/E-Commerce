import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  emptyname!: string;
  emptypass!: string;
  hide! : boolean;
  public loginValid: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginSer: LoginService,
    private router: Router,
    private authSer: AuthService
  ) {
      this.loginSer.match.subscribe((data) => {
        this.loginValid = data;
      })

      this.loginSer.hide.subscribe((data) => {
        this.hide = data;
      })
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    console.log(this.hide);
  }
  onSubmit() {
    // this.serve.getList();
    // this.serve.getData(this.loginForm.value);

    // setTimeout(() => {
    //   this.serve.checkMatch();
    // }, 1000);
    // setTimeout(() => {
    //   this.router.navigate(['dashboard']);
    // }, 1300);
    // this.loginForm.reset();

    if (this.loginForm.valid) {
      this.loginSer.getList();
      this.authSer.userLogin();
      this.loginSer.getCurrentData(this.loginForm.value);

      setTimeout(() => {
        this.loginSer.checkMatch();
      }, 700);    

      setTimeout(() => {
        if(this.loginValid){
          this.router.navigate(['/dashboard/electronics']);
        }
      }, 900);
    }
  }

}