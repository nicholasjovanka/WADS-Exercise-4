import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-cvpage',
  templateUrl: './cvpage.component.html',
  styleUrls: ['./cvpage.component.css']
})
export class CvpageComponent implements OnInit {
  constructor(
    public auth: AuthService,
  ) {
    console.log(auth.user$);
  }

  ngOnInit(): void {
  }
  objectKeys(obj) {
    return Object.keys(obj);
  }
}
