"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
// const numbers = new NumbersCollections([10, 52, -5, 0])
// numbers.sort();
// console.log(numbers.data);
// const characters = new CharactersCollections('Xybn')
// characters.sort();
// console.log(characters.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
