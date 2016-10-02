(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.setBought = function(index, name, quantity) {
      ShoppingListCheckOffService.setBought(index);
    }

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }


  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "eggs", quantity: 30 },
      { name: "bottles of beer", quantity: 10 },
      { name: "litres of milk", quantity: 15 },
      { name: "loaf of bread", quantity: 1 }
    ];
    var boughtItems = [];

    service.setBought = function(itemIndex) {
      var item = toBuyItems[itemIndex];
      toBuyItems.splice(itemIndex, 1);
      boughtItems.push(item);
    };

    service.getToBuyItems = function() {
      return toBuyItems;
    };

    service.getBoughtItems = function() {
      return boughtItems;
    };
  }
})();
