showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Interfaces
// # Task 07. Defining an Interface
enum Category { JavaScript, CSS, HTML, TypeScript, Angular2, Software }

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: (reason: string) => void;
}
function getAllBooks(): Book[] {
    const books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript  },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript  }
    ];
    return books;
}
function getBookById(id): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}
function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
};
printBook(myBook);
myBook.markDamaged('missing back cover');
