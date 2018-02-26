/* global cuid, Item, shoppingList */

'use strict';

// eslint-disable-next-line no-unused-vars
const store = (function () {
  // const hideCheckedItems = function (itemName) {};
  // const searchTerm = function () {};
  const findById = function (id) {
    store.items.find(idValue => idValue === id); 
  };
  const additem = function (name) {
    try {
      console.log(name);
      Item.validateName(name);
      console.log(Item.validateName);
      let result = Item.create(name);
      console.log(result);
      this.items.push(result);
      shoppingList.render();
    } catch(e) { 
      console.error(`Cannot add item ${e.message}`);
    }
    //store.items.push({ id: cuid(), name: name, checked: false });
};
  return {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: '',
    additem,
  };
}());

//const foo = 'bar';

