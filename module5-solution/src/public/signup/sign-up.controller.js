(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService'];
function SignUpController(MyInfoService) {
  var $ctrl = this;

  $ctrl.user = MyInfoService.getMyInfo();
  $ctrl.choiceChecked = false;
  $ctrl.validChoice = false;

  $ctrl.saveMyInfo = function() {
    //console.log($ctrl.user.choice);
    var check = MyInfoService.getMenuItem($ctrl.user.choice);
    check.then(function(response) {
      $ctrl.validChoice = true;
      $ctrl.choiceChecked = true;
      $ctrl.user.favoritDish = [response.data];
      MyInfoService.saveMyInfo($ctrl.user);
    }).catch(function(error) {
      $ctrl.validChoice = false;
      $ctrl.choiceChecked = true;
    });
  };
}

})();
