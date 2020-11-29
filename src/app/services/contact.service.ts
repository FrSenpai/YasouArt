import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firestore: AngularFirestore) { }

  public sendMessage(email, message): Promise<any> {
    return this.firestore.collection('contact').add({email, message})
  }

  public allMessages(): Observable<any> {
    return this.firestore.collection('/contact').valueChanges({idField: 'id'})
  }
}
