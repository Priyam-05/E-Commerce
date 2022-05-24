import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})

export class ShippingComponent implements OnInit {

  shippingForm: FormGroup;

  constructor(private router: Router) { 

    this.shippingForm = new FormGroup({
      firstName: new FormControl('',[ Validators.required]),
      lastName: new FormControl('',[ Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      streetAddress: new FormControl('', [Validators.required, Validators.minLength(15)]),
      landmark: new FormControl(''),
      city: new FormControl('',[ Validators.required]),
      state: new FormControl('',[ Validators.required]),
      zipCode: new FormControl('',[ Validators.required]),
      phone: new FormControl('',[ Validators.required]),
    });
  } 


  ngOnInit(): void {
  }

  
  

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('First Name', form.value.firstName);
    console.log('Email', form.value.email);
    console.log('Street Address', form.value.streetAddress);

    // this.router.navigate(['/dashboard/payment']);
  }
}
