/* global cuid, Item, shoppingList */

'use strict';

// eslint-disable-next-line no-unused-vars
const store = (function () {
  // const hideCheckedItems = function (itemName) {};
  // const searchTerm = function () {};
  const findById = function (id) {
    return store.items.find(item => item.id === id); 
  };
  const additem = function (name) {
    try {
      console.log(name);
      Item.validateName(name);
      console.log(Item.validateName);
      let result = Item.create(name);
      // console.log(result);
      this.items.push(result);
      shoppingList.render();
    } catch(e) { 
      console.error(`Cannot add item ${e.message}`);
    }
  };
  const findAndToggleChecked = function (id) {
    let foundItem  = this.findById(id);
    console.log(foundItem);
    foundItem.checked = !foundItem.checked;
  };
  const findAndUpdateName =  function (id, newName) {
    try {
      Item.validateName(name);
    } catch(e) {
      console.error(`Cannot add item ${e.message}`);
    }
    const item = this.findById(id);
    item.name = newName;
  }
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
    findById,
    findAndToggleChecked,
    findAndUpdateName,
  };
}());

//const foo = 'bar';

