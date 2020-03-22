import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../User';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;
  public currentid;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );


  }
  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.router.navigate(['register']);
    this.currentid = credential.user;
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });

  }

  public updateUserDatatest(user, newbirthdate, newgender, s1, s2, s3, a1, a2, a3, e1, e2, e3 ) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      birthdate: newbirthdate,
      gender: newgender,
      skill1: s1,
      skill2: s2,
      skill3: s3,
      achievement1: a1,
      achievement2: a2,
      achievement3: a3,
      education1: e1,
      education2: e2,
      education3: e3,
    };

    return userRef.set(data, { merge: true });

  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }




}
