showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Asynchronous Patterns
// ### Task 23. Promises
import { getBooksByCategoryPromise } from './lib/utility-functions';
import { Category } from './enums';

console.log('begin');
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => console.log(titles))
    .catch(err => console.error(err));
getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(err => console.error(err));
console.log('end');

// error in then
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => { throw('error in then') })
    .catch(err => console.error(err));

// number of books
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => titles.length)
    .then(numOfBooks => console.log(numOfBooks))
    .catch(err => console.error(err));
