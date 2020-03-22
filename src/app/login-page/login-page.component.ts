import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    loginform =  this.fb.group({
    userName : [''],
    password : [''],

  });
  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

}
