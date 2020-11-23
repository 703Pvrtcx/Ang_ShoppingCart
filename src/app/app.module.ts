import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AuthenticateService } from "./service/authenticate.service";
import { ClothingService } from "./service/clothing.service";
import { UploadService } from "./service/upload.service";
import { DownloadService } from "./service/download.service";

import { TopBarComponent } from './component/top-bar/top-bar.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductAlertsComponent } from './component/product-alerts/product-alerts.component';
import { CartComponent } from './component/cart/cart.component';
import { ShippingComponent } from './component/shipping/shipping.component';
import { DeleteComponent } from './component/delete/delete.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';

// Import all the components for which navigation service has to be activated 
//------------Login Components----------------------------------------
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';

//import { AuthGuard } from "./shared/guard/auth.guard";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvq4gtpwv1eqJ8YWRjn4jstu1NZEGbW1s",
  authDomain: "authapp-4002a.firebaseapp.com",
  databaseURL: "gs://authapp-4002a.appspot.com",
  projectId: "authapp-4002a",
  storageBucket: "authapp-4002a.appspot.com",
  messagingSenderId: "599110822203",
  appId: "1:599110822203:web:24463343c7260d7801af1e",
  measurementId: "G-FYYV4HPTGR"
};

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartComponent,
    ShippingComponent,
    DeleteComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    
    // Login 
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthenticateService,DownloadService,UploadService,ClothingService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
