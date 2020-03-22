import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Form, FormArray, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  public profileform;
  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
  ) {
    this.profileform = this.fb.group({
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      skill1: [''],
      skill2: [''],
      skill3: [''],
      achievement1: [''],
      achievement2: [''],
      achievement3: [''],
      education1: [''],
      education2: [''],
      education3: [''],
    });
  }
  submit(user, newbirthdate, newgender, s1, s2, s3, a1, a2, a3, e1, e2, e3) {
    this.auth.updateUserDatatest(user, newbirthdate, newgender, s1, s2, s3, a1, a2, a3, e1, e2, e3);
    this.router.navigate(['cvpage']);
  }
  ngOnInit(): void {
  }
}
