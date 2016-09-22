(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakov";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
