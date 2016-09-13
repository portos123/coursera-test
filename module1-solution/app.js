(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.lunch_arr = []; /* for further use */
    $scope.styleName = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function() {
      $scope.lunch = String.prototype.trim($scope.lunch);
      if ($scope.lunch == "") {
        $scope.message = "Please enter data first";
        $scope.lunch_arr = [];
        $scope.styleName = "bad";
      } else {
        $scope.lunch_arr = $scope.lunch.split(",");
        // todo check for empty elements
        if ($scope.lunch_arr.length <= 3) {
          $scope.message = "Enjoy!";
          $scope.styleName = "good";
        } else {
          $scope.message = "Too much!";
          $scope.styleName = "good";
        }
      }
    };
  }
})();
