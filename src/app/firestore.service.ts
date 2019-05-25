import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  ref = firebase.firestore().collection('stories');
  constructor() { }

  getStories(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let stories = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          stories.push({
            key: doc.id,
            storyNo: data.storyNo,
            title: data.title,
            description: data.description,
            developer: data.developer,
            release: data.release,
            status: data.status,
            type: data.type,
            branch: data.branch,
            date: data.date,
            releaseDate: data.releaseDate,
            commit: data.commit
          });
        });
        observer.next(stories);
      });
    });
  }
  
  getStory(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: doc.id,
          storyNo: data.storyNo,
          title: data.title,
          description: data.description,
          developer: data.developer,
          release: data.release,
          status: data.status,
          type: data.type,
          branch: data.branch,
          date: data.date,
          releaseDate: data.releaseDate,
          commit: data.commit
        });
      });
    });
  }
  
  postStory(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }
  
  updateStory(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }
  
  deleteStory(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
}
