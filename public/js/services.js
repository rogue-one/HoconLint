
var app = angular.module('app');

app.factory('RestService',['$http',function($http) {
  var path = "/api/parse";
  var submit = function(data) {
    console.log("calling rest service");
    return $http.post(path,data)
  };
  return {
    'submit': submit
  }

}]);