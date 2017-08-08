votingApp.controller('createController',['$rootScope','$scope','$http',function($rootScope, $scope, $http){
  $scope.votingOptions = [];
  $scope.createOption = function(){
    $scope.votingOptions.push({id:'option'+$scope.votingOptions.length+1});
  }
}]);
