'use strict';

/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
const store = (function () {
  const hideCheckedItems = function (itemName) {};
  const searchTerm = function () {};
  const findById = function (id) {
    store.items.find(idValue => idValue === id); 
  };
  const additem = function (name) {
    try {
    
    } catch(error) {
          
    }
  };
  return {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: ''
  };
}());

//const foo = 'bar';

