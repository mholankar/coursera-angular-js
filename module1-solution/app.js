(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = [$scope, $filter];

function LunchCheckController($scope, $filter) {
  $scope.lunchItems = "";
  $scope.lunchItemCount = 0;
  $scope.lunchMessage = "";

  function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    $scope.lunchItemCount = arrayOfStrings.length;

    if (stringToSplit.length == 0) {
      $scope.lunchMessage = "Please enter data first";
      return;
    }

    if ($scope.lunchItemCount==0) {
      $scope.lunchMessage = "Please enter data first";
    } else if ($scope.lunchItemCount < 4) {
      $scope.lunchMessage = "Enjoy!";
    } else {
      $scope.lunchMessage = "Too Much!";
    }
  };

$scope.displayLunchResult = function() {
  splitString($scope.lunchItems, ',');
};



};

})();
