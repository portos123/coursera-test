(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = ['$http', 'ApiPath'];
function MyInfoService($http, ApiPath) {
  var service = this;

  service.myInfo = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      choice: "",
      favoritDish: [],
      saved: false
  };

  service.getMyInfo = function () {
    return service.myInfo;
  };


  service.saveMyInfo = function (info) {
    info.saved = true;
    service.myInfo = info;
  };

  service.getMenuItem = function (choice) {
    var resp = $http.get(ApiPath + '/menu_items/' + choice + '.json');
    return resp;
  };

}



})();
