(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      restrict: 'A',
      templateUrl: 'foundItems.html',
      scope: {
        found: '<foundItems',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'menu',
      bindToController: true
    };

    return ddo;
  };

  function FoundItemsDirectiveController() {
    var menu = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    menu.searchTerm = "";
    menu.found = [];

    menu.narrowItDown = function() {
      if (menu.searchTerm != "") {
        var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
        promise.then(function(response) {
            menu.found = response;
        })
        .catch(function (error) {
          console.log("Something went wrong!");
        });
      } else {
        menu.found = [];
      }
    };

    menu.dontWantThis = function(itemIndex) {
      if (menu.found.length > 0) {
        menu.found.splice(itemIndex, 1);
      }
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
          // process result and only keep items that match
          var foundItems = [];

          angular.forEach(result.data.menu_items, function(item) {
            if (item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ) {
              foundItems.push(item);
            }
          });

          return foundItems;
      });
    };
  }
})();
