import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import {AuthGuard} from './auth.guard';
import { CvpageComponent } from './cvpage/cvpage.component';
import {AuthService} from './services/auth.service';


const config = {
  apiKey: 'AIzaSyC3L1u2DBdMXevZzObsNY5wYFw5kbyYxP0',
  authDomain: 'exercise4-72635.firebaseapp.com',
  databaseURL: 'https://exercise4-72635.firebaseio.com',
  projectId: 'exercise4-72635',
  storageBucket: 'exercise4-72635.appspot.com',
  messagingSenderId: '265829726182',
  appId: '1:265829726182:web:1135a73c08c2c27c4ac827',
  measurementId: 'G-ELBG66FC0Q'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterpageComponent,
    CvpageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    RouterModule.forRoot([
      {path: '', redirectTo: '/login', pathMatch: 'full' },
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterpageComponent, canActivate: [AuthGuard]},
      {path: 'cvpage', component: CvpageComponent, canActivate: [AuthGuard]},
    ]),
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
