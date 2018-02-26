/* global cuid, Item, shoppingList */

'use strict';

// eslint-disable-next-line no-unused-vars
const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  // const hideCheckedItems = function (itemName) {};
  // const searchTerm = function () {};
  const findById = function (id) {
    return this.items.find(item => item.id === id); 
  };
  const additem = function (name) {
    try {
      console.log(name);
      Item.validateName(name);
      console.log(Item.validateName);
      let result = Item.create(name);
      // console.log(result);
      this.items.push(result);
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
  };
  const findAndDelete = function (id) {
    const index = this.findById(id);
    this.items.splice(index,1);  
  };

  const toggleCheckedFilter = function () {
    store.hideCheckedItems = !store.hideCheckedItems;
  };
  const setSearchTerm = function (val) {
    store.searchTerm = val;
  };

  return {
    items,
    hideCheckedItems: false,
    searchTerm: '',
    additem,
    findById,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
  };
}());

//const foo = 'bar';

