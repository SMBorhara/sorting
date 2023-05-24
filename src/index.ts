import { Sorter } from "./sorter";
import { NumbersCollections } from "./NumbersCollections";
import { CharactersCollections } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";

// const numbers = new NumbersCollections([10, 52, -5, 0])
// numbers.sort();

// console.log(numbers.data);

// const characters = new CharactersCollections('Xybn')
// characters.sort();

// console.log(characters.data);

const linkedList = new LinkedList();
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

linkedList.sort();

linkedList.print();