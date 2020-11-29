import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Biographie } from '../models/biographie';

@Injectable({
  providedIn: 'root'
})
export class BiographieService {

  constructor(private firestore: AngularFirestore) { }

  getBiographie(): Observable <any> {
    /* On utilise get uniquement un id unique puisque c'est une biographie qui sera uniquement update */
    return this.firestore.collection('biographie').doc('rWOserh75eimuIn1LI8Z').valueChanges()
  }
}
