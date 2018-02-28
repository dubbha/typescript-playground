showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Types Basics
// # Task 01. Basic Types

function getAllBooks(): any[] {
    const books: any[] = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

function logFirstAvailable(books: any[]): void {
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
console.log(logFirstAvailable(getAllBooks()));
