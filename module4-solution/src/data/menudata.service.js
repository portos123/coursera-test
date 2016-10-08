(function () {
'use strict';

angular.module('Data').service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q', '$http', 'ApiBasePath']
function MenuDataService($q, $http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function() {
    // http request to restaurant api - returns promise
    var deferred = $q.defer();

    $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function (result) {
           deferred.resolve(result.data);
      });

      return deferred.promise;
  };

  service.getItemsForCategory = function(categoryShortName) {
    // http request to restaurant api - returns promise
    var deferred = $q.defer();

    $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      }).then(function (result) {
           deferred.resolve(result.data);
      });

      return deferred.promise;
  };
}

})();
