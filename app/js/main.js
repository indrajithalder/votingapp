/*(function(){
  'use strict';
*/
var votingApp = angular.module('votingApp',['ngRoute'])
  .config([
    '$locationProvider',
    '$routeProvider',
    '$httpProvider',function($locationProvider, $routeProvider, $httpProvider){
      $routeProvider.when('/',{
        controller:'dashboardController',
        templateUrl:'partials/dashboard.html'
      })
      .when('/create',{
        controller:'createController',
        templateUrl:'partials/create.html'
      });
    }]);
/*}())*/
