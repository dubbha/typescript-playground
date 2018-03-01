showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Asynchronous Patterns
// # Task 22. Callback Functions
import { getBooksByCategory, logCategorySearch } from './lib/utility-functions';
import { Category } from "./enums";

console.log('begin');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('end');
