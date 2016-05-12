
var app = angular.module('app', []);

app.factory('RestService',['$http',function($http) {
  var path = "/api/parse"
  var submit = function(data) {
    $http.post(path,data)
  };
  return {
    'submit': submit
  }

}]);