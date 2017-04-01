
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  
  $stateProvider


  .state('inicial', {
      url: '/inicial',
      templateUrl: 'templates/inicial.html'
    })

   .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })

    .state('organizador', {
      url: '/organizador',
      templateUrl: 'templates/organizador.html'
    })

     .state('calendario', {
      url: '/calendario',
      templateUrl: 'templates/calendario.html'
    })

        .state('informacoes', {
      url: '/informacoes',
      templateUrl: 'templates/informacoes.html'
    })

     .state('telefone', {
      url: '/telefone',
      templateUrl: 'templates/telefone.html'
    })

  .state('email', {
      url: '/email',
      templateUrl: 'templates/email.html'
    })





  

  
  $urlRouterProvider.otherwise('/login');

});
