import {
  Injectable
} from '@angular/core';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import {
  Observable
} from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class IllustrationsService {
  constructor(private firestore: AngularFirestore) {}

  getLatestIllustrations(nb): Observable <any> {
    return this.firestore.collection('Illustrations', ref => ref
      .orderBy('creation_timestamp', 'desc').limit(nb)).valueChanges({idField: 'id'})
  }

  getIllustrationById(id): Observable <any> {
    return this.firestore.collection('Illustrations').doc(id).valueChanges()
  }

  getAllIllustrations(): Observable<any> {
    return this.firestore.collection('Illustrations', ref => ref
      .orderBy('creation_timestamp', 'desc')).valueChanges({idField: 'id'})
  }

  addIllustration(title, description, imgUrl): Promise<any> {
    return this.firestore.collection('Illustrations').add({
      titre: title,
      description: description,
      url_image: imgUrl,
      creation_timestamp: firebase.firestore.Timestamp.now()
    })
  }


}
