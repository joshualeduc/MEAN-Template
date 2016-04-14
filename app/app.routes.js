angular.module('BossApp')
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'app/template/components/home/homeView.html',
      controller: 'homeCtrl'
    });
  });