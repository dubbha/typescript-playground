showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Functions
// # Task 03. Arrow Functions
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
