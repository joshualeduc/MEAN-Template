angular.module('BossApp')
  .controller('homeCtrl', function($scope, homeSrvc){
    $scope.greeting = "Hellow World";
    $scope.service = homeSrvc.testService;
  });