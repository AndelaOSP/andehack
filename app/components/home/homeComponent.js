'use strict';
const module = angular.module('hackit.components');

class HomeComponent {
  constructor(AuthService, $rootScope) {
    this.auth = AuthService;
    this.rootScope = $rootScope;
  }
  $onInit() {}
  login() {
    this.auth.login().then(data => {
      let user = {
        id: data.user.uid,
        name: data.user.displayName,
        email: data.user.email,
        imageUrl: data.user.photoUrl
      }
      this.rootScope.currentUser = user;
    });
  }
}
module.component('homePage', {
  templateUrl: '/components/home/homeComponent.html',
  controllerAs: 'auth',
  controller: ['AuthService', '$rootScope', HomeComponent]

});
