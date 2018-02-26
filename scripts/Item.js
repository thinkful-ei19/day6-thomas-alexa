/* global cuid */
'use strict';


// eslint-disable-next-line no-unused-vars
const Item = (function () {
  const validateName = function (name) {
    console.log('validateName ran');
    if(!name) {
      throw new Error('Name does not exist.');
    }
  };
  const create = function (name) {
    return {
      name,
      id: cuid(),
      checked: false,
    };
  };
  const foo = 'bar';
  return {
    //this returns the method declaration
    validateName,
    create,
  };
}());

// const validateName = function (name) {
//   throw new Error('Name does not exist.');
// };

// const create = function (name) {
//   return {
//     name,
//     id: cuid(),
//     checked: false,
//   };
// };

