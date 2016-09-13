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
      $scope.lunch = $scope.lunch.trim();
      if ($scope.lunch == "") {
        $scope.message = "Please enter data first";
        $scope.lunch_arr = [];
        $scope.styleName = "bad";
      } else {
        $scope.lunch_arr = $scope.lunch.split(",");
        // remove empty elements
        $scope.lunch_arr = $scope.lunch_arr.filter(function(e) { return e === 0 || e.trim() });
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
