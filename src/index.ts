import { Sorter } from "./sorter";
import { NumbersCollections } from "./NumbersCollections";

const numbers = new NumbersCollections([10, 3, -5, 0])

const sorter = new Sorter(numbers);
sorter.sort();

console.log(numbers.data);