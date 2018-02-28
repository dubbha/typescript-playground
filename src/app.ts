showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Modules and Namespaces
// # Task 16. Default Export
import { Category } from './enums';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { Book, DamageLogger, Author, Librarian } from './interfaces';
import RefBook from './encyclopedia';

const logDamage: DamageLogger = (reason: string) => console.log(reason);
logDamage('damage logged');

const refBook: RefBook = new RefBook('Wiki', 1998, 3);
refBook.printItem();
refBook.printCitation();
