import { LoginComponent } from './authentication/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CartComponent } from './checkout/cart/cart.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ShippingComponent } from './checkout/shipping/shipping.component';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Routes = [
  { path: '', redirectTo : 'login', pathMatch: 'full'},
  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent },
  { 
    path:"dashboard", component: DashboardComponent,
    children: [
      { path: "electronics", component: ElectronicsComponent },
      { path: "clothes", component: ClothesComponent},
      { path: "books", component: BooksComponent},
      { path: "cart", component: CartComponent},
      { path: "shipping", component: ShippingComponent}
    ]
  },
  { path:"**", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
