showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Types Basics

// # Task 01. Basic Types
// # Task 02. Enum

// function getAllBooks(): any[] {
//     const books: any[] = [
//         { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
//         { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript  },
//         { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
//         { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript  }
//     ];

//     return books;
// }

// function logFirstAvailable(books: any[]): void {
//     const numberOfBooks: number = books.length;

//     let firstAvailable: string;
//     let numOfBooks: number;

//     console.log(`Number of books: ${books.length}`);
//     for (const cur of books) {
//         if (cur.available) {
//             return console.log(`First Available: ${cur.title}`);
//         }
//     }
// }
// console.log(logFirstAvailable(getAllBooks()));

// function getBookTitlesByCategory(category: Category): string[] {
//     const allBooks = getAllBooks();
//     const titles: string[] = [];

//     for (const cur of allBooks) {
//         if (cur.category === category) {
//             titles.push(cur.title);
//         }
//     }

//     return titles;
// }

// function logBookTitles(bookTitles: string[]): void {
//     for (const title of bookTitles) {
//         console.log(title);
//     }
// }
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));



// // ### Functions
// // # Task 03. Arrow Functions
// function getAllBooks(): any[] {
//     const books: any[] = [
//         { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
//         { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript  },
//         { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
//         { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript  }
//     ];

//     return books;
// }

// getAllBooks().forEach(book => console.log(`[${book.id}]`, book.title));

// function getBookById(id): any {
//     const books = getAllBooks();
//     return books.find(book => book.id === id);
// }

// // # Task 04. Function Type
// function createCustomerId(name: string, id: number): string {
//     return `${name}${id}`;
// }

// let myId: string;
// myId = createCustomerId('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = createCustomerId;
// console.log(idGenerator('Ben', 20));

// // # Task 05. Optional, Default and Rest Parameters
// function createCustomer(name: string, age?: number, city?: string): void {
//     let output = `${name}`;
//     if (age) output += ` ${age}`;
//     if (city) output += ` ${city}`;
//     console.log(output);
// }
// createCustomer('Ann');
// createCustomer('Ann', 25);
// createCustomer('Ann', 25, 'New York');

// function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
//     const allBooks = getAllBooks();
//     const titles: string[] = [];

//     for (const cur of allBooks) {
//         if (cur.category === category) {
//             titles.push(cur.title);
//         }
//     }

//     return titles;
// }
// console.log(getBookTitlesByCategory());

// function logFirstAvailable(books: any[] = getAllBooks()): void {
//     const numberOfBooks: number = books.length;

//     let firstAvailable: string;
//     let numOfBooks: number;

//     console.log(`Number of books: ${books.length}`);
//     for (const cur of books) {
//         if (cur.available) {
//             return console.log(`First Available: ${cur.title}`);
//         }
//     }
// }
// logFirstAvailable();

// function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
//     const availableBooks: string[] = [];

//     for (const id of bookIDs) {
//         const book = getBookById(id);
//         if (book.available) {
//             availableBooks.push(book.title);
//         }
//     };

//     console.log('Customer:', customer);
//     return availableBooks;
// }
// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// myBooks.forEach(title => console.log(title));


// // # Task 06. Function Overloading
// function getTitles(author: string): string[];
// function getTitles(available: boolean): string[];
// function getTitles(property: string | boolean): string[] {
//     if (typeof property === 'string') {
//         return getAllBooks().filter(book => book.author === property).map(book => book.title);
//     } else if (typeof property === 'boolean') {
//         return getAllBooks().filter(book => book.available === property).map(book => book.title);
//     }
// }
// console.log(getTitles('Lea Verou'));    // books by Lea Verou
// console.log(getTitles(false));          // unavailable books



// // ### Interfaces

// // # Task 07. Defining an Interface
// interface Book {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
//     pages?: number;
//     markDamaged?: (reason: string) => void;
// }

// function getAllBooks(): Book[] {
//     const books: Book[] = [
//         { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
//         { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript  },
//         { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
//         { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript  }
//     ];

//     return books;
// }

// function getBookById(id): Book | undefined {
//     const books = getAllBooks();
//     return books.find(book => book.id === id);
// }

// function printBook(book: Book): void {
//     console.log(`${book.title} by ${book.author}`);
// }

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');



// // # Task 08. Defining an Interface for Function Types
// interface DamageLogger {
//     (reason: string): void;
// }
//
// interface Book {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
//     pages?: number;
//     markDamaged?: DamageLogger;
// }
//
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
// };
// myBook.markDamaged('missing back cover');
//
// const logDamage: DamageLogger = (reason: string) => console.log(reason);
// logDamage('damage logged');


// // # Task 09. Extending Interface
// interface Person {
//     name: string;
//     email: string;
// }
//
// interface Author extends Person {
//     numBooksPublished: number;
// }
//
// interface Librarian extends Person {
//     department: string;
//     assistCustomer: (custName: string) => void;
// }
//
// const favoriteAuthor: Author = {
//     name: 'Ann',
//     email: 'ann@site.com',
//     numBooksPublished: 3,
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@gmail.com',
//     department: 'classical',
//     assistCustomer: (custName: string) => console.log(`Assist ${custName}`),
// }


// # Task 10. Interfaces for Class Types
// class UniversityLibrarian implements Librarian {
//     name: 'Uri';
//     email: 'uri@gmail.com';
//     department: 'physics';
//
//     assistCustomer(custName: string): void {
//         console.log(`${this.name} is assisting ${custName}`);
//     }
// }
//
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Ann';
// favoriteLibrarian.assistCustomer('Boris');


// // ### Classes
// // # Task 11. Creating and Using Classes
//
// class ReferenceItem {
//     // title: string;
//     // year: number;
//     //
//     // constructor(newTitle: string, newYear: number) {
//     //     console.log('Creating new ReferenceItem');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }
//
//     constructor(
//         public title: string,
//         private year: number,
//     ) {}
//
//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//     }
// }
//
// const ref: ReferenceItem = new ReferenceItem('Facts & Figures', 2018);
// ref.printItem();


// class ReferenceItem {
//     static department: string = 'Classical';
//     private _publisher: string;
//
//     constructor(
//         public title: string,
//         private year: number,
//     ) {}
//
//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }
//
//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }
//
//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);  // access instance prop
//         console.log(`Department: ${ReferenceItem.department}`);      // access static prop
//     }
// }
//
// const ref: ReferenceItem = new ReferenceItem('Facts & Figures', 2018);
// ref.printItem();
// ref.publisher = 'Amazon';
// console.log(ref.publisher);


// // # Task 12. Extending Classes
// class Encyclopedia extends ReferenceItem {
//     public edition: number;
//
//     constructor(
//         newTitle: string,
//         newYear: number,
//         edition: number
//     ) {
//         super(newTitle, newYear);
//         this.edition = edition;
//     }
//
//     printItem() {
//         super.printItem();
//         console.log(`Edition: edition ${this.edition}`);
//     }
// }
//
// const refBook: Encyclopedia = new Encyclopedia('Wiki', 1998, 3);
// refBook.printItem();



// // # Task 13. Creating Abstract Classes
//
// abstract class ReferenceItem {
//     static department: string = 'Classical';
//     private _publisher: string;
//
//     constructor(
//         public title: string,
//         protected year: number,
//     ) {}
//
//     abstract printCitation(): void;
//
//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }
//
//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }
//
//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);  // access instance prop
//         console.log(`Department: ${ReferenceItem.department}`);      // access static prop
//     }
// }
//
// class Encyclopedia extends ReferenceItem {
//     public edition: number;
//
//     constructor(
//         newTitle: string,
//         newYear: number,
//         edition: number
//     ) {
//         super(newTitle, newYear);
//         this.edition = edition;
//     }
//
//     printCitation(): void {
//         console.log(`${this.title} - ${this.year}`);
//     }
//
//     printItem() {
//         super.printItem();
//         console.log(`Edition: edition ${this.edition}`);
//     }
// }
//
// const refBook: Encyclopedia = new Encyclopedia('Wiki', 1998, 3);
// refBook.printItem();
// refBook.printCitation();



// ### Modules and Namespaces
// # Task 14. Using Namespaces



// # Task 15. Export and Import
// # Task 16. Default Export

import { Category } from './enums';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { Book, DamageLogger, Author, Librarian } from './interfaces';
import RefBook from './encyclopedia';

const refBook: RefBook = new RefBook('Wiki', 1998, 3);
// refBook.printItem();
// refBook.printCitation();


// ### Generics
// # Task 17. Generic Functions
import { purge } from './lib/utility-functions';

const inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

const purgedBooks = purge<Book>(inventory);
// console.log(purgedBooks);

const purgedNumbers: Array<number> = purge([1, 2, 3, 4, 5]);
// console.log(purgedNumbers);

// # Task 18. Generic Interfaces and Classes
import { Magazine } from './interfaces';
import Shelf from './shelf';

const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
const firstBook = bookShelf.getFirst();
// console.log(firstBook.title);

const magazines: Array<Magazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));
const firstMagazine = magazineShelf.getFirst();
// console.log(firstMagazine.title);

// # Task 19. Generic Constraints
// magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points'));


// ### Decorators
// # Task 20.1. Class Decorators
// # Task 20.2. Class Decorators that replace constructor functions
// # Task 21. Method Decorator

// ### Asynchronous Patterns
// ### Task 22. Callback Functions
// ### Task 23. Promises
// ### Task 24. Async/await

