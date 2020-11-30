import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  LoginService
} from 'src/app/services/login.service';
import firebase from "firebase/app";
import "firebase/auth";
import {
  ToastrService
} from 'ngx-toastr';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginForm: FormGroup;
  forgotPassword: boolean = false;
  constructor(private fb: FormBuilder, private loginService: LoginService, private toastr: ToastrService, private route: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(75)]]
    })
  }

  public forgotPasswordDisplay(forgotPasswordSwitch:boolean): void {
    this.forgotPassword = forgotPasswordSwitch;
    if (forgotPasswordSwitch) {
      this.loginForm.get('password').setValue('');
    }
  }

  public login(): void {
    const {
      email,
      password
    } = this.loginForm.value
    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
      this.toastr.success('Connecté avec succès !');
      this.route.navigateByUrl('/adminPanel');
    }).catch((error) => {
      this.toastr.error('Les identifiants de connexion sont incorrects.')
    })
  }

  public sendPasswordReset(): void {
    const email = this.loginForm.get('email').value
    const auth = firebase.auth();
    auth.sendPasswordResetEmail(email).then(() => {
      this.toastr.success('Un lien de réinitialisation de votre mot de passe a correctement été envoyé.')
      this.forgotPassword = false;
    }).catch(() => {
      this.toastr.error('L\'adresse mail renseignée ne semble pas être utilisé par un utilisateur.')
    });
  }

}
