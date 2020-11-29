import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import firebase from "firebase/app";
import "firebase/auth";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(75)]]
    })
  }

  public login():void {
    const {email, password} = this.loginForm.value
    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
      this.toastr.success('Connecté avec succès !');
      this.route.navigateByUrl('/adminPanel');
    }).catch((error) => {
      this.toastr.error('Les identifiants de connexion sont incorrects.')
    })
  }

}
