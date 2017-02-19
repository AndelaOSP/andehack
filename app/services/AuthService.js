'use strict';

class AuthService {
  constructor() {
    this.provider = new firebase.auth.GoogleAuthProvider();
  }
  login() {
    return firebase
      .auth()
      .signInWithPopup(this.provider);
  }
}
export default angular.module('hackit.services')
  .service('AuthService', AuthService);
