votingApp.directive('menu',['$location', function($location){
    var menu = {};
    menu.restrict = 'AE';
    menu.templateUrl = 'partials/menuDirective.html';
    menu.link = function(scope, element, attr){
      //console.log($location.path());
      scope.getactiveclass = function(path){
        if(path ==  $location.path()){
          return true;
        }else{
          return false;
        }
      }
    }
    return menu;
}]);
