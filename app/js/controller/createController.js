votingApp.controller('createController',['$rootScope','$scope','$http',function($rootScope, $scope, $http){
  $scope.votingOptions = [];
  $scope.createOption = function(){
    $scope.votingOptions.push({id:'option'+ ($scope.votingOptions.length + 1)});
  }
  $scope.deleteOption = function(optionid) {
    var index = $scope.votingOptions.indexOf({id:optionid});
    $scope.votingOptions.splice(index);
  }
}]);
