import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any;
  isAuth: boolean;
  constructor(private firestore: AngularFirestore) {}

  public getAdminUser(): Observable<any> {
    return this.firestore.collection('/userAdmin').get()
  }
}
