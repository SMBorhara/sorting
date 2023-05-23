"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const NumbersCollections_1 = require("./NumbersCollections");
const numbers = new NumbersCollections_1.NumbersCollections([10, 3, -5, 0]);
const sorter = new sorter_1.Sorter(numbers);
sorter.sort();
console.log(numbers.data);
