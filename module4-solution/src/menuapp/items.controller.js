(function () {
'use strict';

angular.module('MenuApp').controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemsList = this;

  itemsList.items = items.menu_items;
  itemsList.cat_name = items.category.name;
}

})();
