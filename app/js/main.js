(function(){
  'use strict';

  angular.module('votingApp',['ngRoute'])
  .config([
    '$locationProvider',
    '$routeProvider',
    '$httpProvider',function($locationProvider, $routeProvider, $httpProvider){
      $routeProvider.when('/',{
        templateUrl:'partials/dashboard.html'
      })
      .when('/create',{
        templateUrl:'partials/create.html'
      });
    }]);
}())
