(function(){
  'use strict';

  angular.module('votingApp',['ngRoute'])
  .config([
    '$locationProvider',
    '$routeProvider',
    '$httpProvider',function($locationProvider, $routeProvider, $httpProvider){
      $routeProvider.when('/',{
        controller:'controller/dashboardController.js',
        templateUrl:'partials/dashboard.html'
      })
      .when('/create',{
        controller:'controller/createController.js',
        templateUrl:'partials/create.html'
      });
    }]);
}())
