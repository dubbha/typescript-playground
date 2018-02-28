showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Modules and Namespaces
// # Task 15. Export and Import
import { Category } from './enums';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { Book, DamageLogger, Author, Librarian } from './interfaces';

const logDamage: DamageLogger = (reason: string) => console.log(reason);
logDamage('damage logged');
