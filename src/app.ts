showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Modules and Namespaces
// # Task 17. Generic Functions
import { Category } from './enums';
import { Book } from './interfaces';
import RefBook from './encyclopedia';
import { purge } from './lib/utility-functions';

const inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

const purgedBooks = purge<Book>(inventory);
console.log(purgedBooks);

const purgedNumbers: Array<number> = purge([1, 2, 3, 4, 5]);
console.log(purgedNumbers);
