import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any;
  constructor(private firestore: AngularFirestore) {}

  get isAuth():boolean {
    return (this.user !== null)
  }

  public getAdminUser(): Observable<any> {
    return this.firestore.collection('/userAdmin').get()
  }
}
