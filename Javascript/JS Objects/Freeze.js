"use strict";
const obj = {
    prop: 42
};

Object.freeze(obj);

obj.prop = "changed";

console.log(obj.prop);