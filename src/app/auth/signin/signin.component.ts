import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/signup/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private autheService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    this.autheService.signinUser(form.value.email, form.value.psswd);
  }
}
