votingApp.controller('createController',['$rootScope','$scope','$http',function($rootScope, $scope, $http){
  $scope.votingOptions = [];
  $scope.submitActive = false;
  $scope.createOption = function(){
    $scope.votingOptions.push({id:'option'+ ($scope.votingOptions.length + 1)});
    $scope.submitActive = false;
  };
  $scope.deleteOption = function(optionid) {
    var index = $scope.votingOptions.indexOf({id:optionid});
    $scope.votingOptions.splice(index);
    $scope.checkActive();
  };
  $scope.checkActive = function(){
    var activeClass = true;
    angular.forEach($scope.votingOptions, function(option, key){
      if(angular.isUndefined(option.name) || option.name == ''){
        activeClass = false;
      }
    });
    if(angular.isUndefined($scope.votingname) || $scope.votingname == '')
      activeClass = false;
    $scope.submitActive = $scope.votingOptions.length && activeClass;
  }
  $scope.submitForm = function() {
    console.log($scope);
  };

}]);
