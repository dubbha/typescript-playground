showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Decorators
// # Task 20.1. Class Decorators
// # Task 20.2. Class Decorators that replace constructor functions
import { UniversityLibrarian } from "./classes";

const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris');
