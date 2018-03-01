showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Asynchronous Patterns
// ### Task 24. Async/await
// No need to use babel-polyfill with new TypeScript
// import 'babel-polyfill';
import { Category } from './enums';
import { logSearchResults } from './lib/utility-functions';

console.log('Beginning search...');
logSearchResults(Category.JavaScript)
    .catch(reason => console.log(reason));
logSearchResults(Category.Software)
    .catch(reason => console.log(reason));
console.log('Search submitted...');
