import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductAlertsComponent } from './component/product-alerts/product-alerts.component';
import { CartComponent } from './component/cart/cart.component';
import { ShippingComponent } from './component/shipping/shipping.component';
import { DeleteComponent } from './component/delete/delete.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';


import { AboutComponent } from './component/about/about.component';

const routes: Routes = [ 
  //{ path: '', component: HomeComponent},
  { path: 'pr', component: ProductListComponent},
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent},
  
  { path: 'items/:itemId', component: DeleteComponent},
  { path: 'shipping', component: ShippingComponent },
  { path: 'about', component: AboutComponent},
  //
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
