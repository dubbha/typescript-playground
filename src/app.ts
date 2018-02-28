showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Functions
// # Task 06. Function Overloading
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

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(property: string | boolean): string[] {
    if (typeof property === 'string') {
        return getAllBooks().filter(book => book.author === property).map(book => book.title);
    } else if (typeof property === 'boolean') {
        return getAllBooks().filter(book => book.available === property).map(book => book.title);
    }
}
console.log(getTitles('Lea Verou'));    // books by Lea Verou
console.log(getTitles(false));          // unavailable books
