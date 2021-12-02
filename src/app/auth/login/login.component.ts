import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataUserLogin } from '../interfaces/datauserlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initialDataLogin();
  }

  dataLogin!: DataUserLogin;

  public loginForm = this.formBuilder.group({
    email     : ['', [Validators.required, Validators.email]],
    password  : ['', [Validators.required, Validators.minLength(8)]],
    remenber  : [false]
  });

  loginUser(){
    this.router.navigate(['/projects']);
    // if(this.loginForm.invalid){
    //   this.loginForm.markAllAsTouched();
    // }

    const dataUser: DataUserLogin = this.loginForm.value;
    this.saveDeleteDataUser(dataUser.remenber);
    this.router.navigate(['/projects']);
  }

  initialDataLogin(){
    const dataUser = localStorage.getItem('dataUser');
    if(dataUser){
      this.dataLogin = JSON.parse(dataUser);
      this.loginForm.setValue(this.dataLogin);
    }
  }

  saveDeleteDataUser(remenber: boolean){
    if(remenber){
      localStorage.setItem('dataUser', JSON.stringify(this.loginForm.value));
    }else{
      localStorage.removeItem('dataUser');
    }
  }

}
