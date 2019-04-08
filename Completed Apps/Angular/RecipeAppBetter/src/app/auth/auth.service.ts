// THIS IS NO LONGER BEING USED BECAUSE OF NGRX

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as firebase from 'firebase/app';

import * as fromApp from '../store/app.reducers';
import * as AuthActions from '../auth/store/auth.actions';

@Injectable()
export class AuthService {
    //REPLACED BY NGRX THROUGH STORE
    // token: string;

    constructor(
        private router: Router,
        private store: Store<fromApp.AppState>
        ){}

    signupUser(email: string, password: string) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .then(
                user => {
                    this.store.dispatch(new AuthActions.Signup());
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token:string) => {
                                this.store.dispatch(new AuthActions.SetToken(token));
                            }
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
                response => {
                    this.store.dispatch(new AuthActions.Signin());
                    this.router.navigate(['recipes']);
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token:string) => {
                                this.store.dispatch(new AuthActions.SetToken(token));
                            }
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    // REPLACED BY NGRX THROUGH STORE
    // getToken() {
    //     firebase.auth().currentUser.getIdToken()
    //         .then(
    //             (token:string) => this.token = token
    //         )
    //     return this.token;
    // }

    // isAuthenticated() {
    //     return this.token != null;
    // }

    logout() {
        firebase.auth().signOut();
        
        // this.token = null;
    }
}