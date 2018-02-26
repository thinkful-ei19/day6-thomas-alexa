'use strict';


// eslint-disable-next-line no-unused-vars
const Item = (function () {
  const foo = 'bar';
  return {
    validateName(name){},
    create(name){},
  };
}());

const validateName = function (name) {
  throw new Error('Name does not exist.');
};

const create = function (name) {
  return {
    name,
    id: cuid(),
    checked: false,
  };
};