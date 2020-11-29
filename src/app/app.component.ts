import {
  Component,
  HostListener
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  LoginService
} from './services/login.service';
import firebase from "firebase/app";
import {
  Observable
} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yasou-art';
  constructor(private route: Router, private loginService: LoginService) {
    this.checkIfAuthChanged()
  }
  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    if (event.key === "²" && event.ctrlKey) {
      this.route.navigateByUrl('/adminPanel')
    }
  }

  checkIfAuthChanged() {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loginService.user = {
          user: user.uid
        }
        this.loginService.isAuth = true;
      } else {
        this.loginService.user = null;
        this.loginService.isAuth = false;
      }
    })
  }




}
