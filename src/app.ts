showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Functions
// # Task 05. Optional, Default and Rest Parameters
enum Category { JavaScript, CSS, HTML, TypeScript, Angular2, Software }

function getAllBooks(): any[] {
    const books: any[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript  },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript  }
    ];

    return books;
}

getAllBooks().forEach(book => console.log(`[${book.id}]`, book.title));

function getBookById(id): any {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

function createCustomer(name: string, age?: number, city?: string): void {
    let output = `${name}`;
    if (age) output += ` ${age}`;
    if (city) output += ` ${city}`;
    console.log(output);
}
createCustomer('Ann');
createCustomer('Ann', 25);
createCustomer('Ann', 25, 'New York');

function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const allBooks = getAllBooks();
    const titles: string[] = [];

    for (const cur of allBooks) {
        if (cur.category === category) {
            titles.push(cur.title);
        }
    }
    return titles;
}
console.log(getBookTitlesByCategory());

function logFirstAvailable(books: any[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;

    let firstAvailable: string;
    let numOfBooks: number;

    console.log(`Number of books: ${books.length}`);
    for (const cur of books) {
        if (cur.available) {
            return console.log(`First Available: ${cur.title}`);
        }
    }
}
logFirstAvailable();

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const availableBooks: string[] = [];

    for (const id of bookIDs) {
        const book = getBookById(id);
        if (book.available) {
            availableBooks.push(book.title);
        }
    };

    console.log('Customer:', customer);
    return availableBooks;
}
const myBooks = checkoutBooks('Ann', 1, 2, 4);
myBooks.forEach(title => console.log(title));
