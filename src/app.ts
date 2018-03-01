showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Decorators
// # Task 21. Method Decorator
import { UniversityLibrarian } from "./classes";

const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris');

favoriteLibrarian.assistFaculty();
favoriteLibrarian.assistFaculty = null;

favoriteLibrarian.teachCommunity();
favoriteLibrarian.teachCommunity = null;   // will fail, not writable
