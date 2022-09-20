import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = undefined!;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.authService.register(this.registerForm.getRawValue()).subscribe(res => {
      if (res.status === 201 ) {
        this.authService.login(this.registerForm.controls['email'].value, this.registerForm.controls['password'].value, () => {
          this.router.navigateByUrl('/');
        });
      }
      else {
        // TODO manage error
      }
    });
  }

}
