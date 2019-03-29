import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/signup/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice: AuthService) { }
  onSubmit(form: NgForm){
    this.authservice.signupUser(form.value.email, form.value.psswd);
  }
  ngOnInit() {
  }

}
