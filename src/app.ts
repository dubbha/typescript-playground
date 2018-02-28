showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Types Basics
// # Task 02. Enum

enum Category { JavaScript, CSS, HTML, TypeScript, Angular2, Software }

function getAllBooks(): any[] {
    const books: any[] = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript  },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript  }
    ];

    return books;
}

function getBookTitlesByCategory(category: Category): string[] {
    const allBooks = getAllBooks();
    const titles: string[] = [];

    for (const cur of allBooks) {
        if (cur.category === category) {
            titles.push(cur.title);
        }
    }

    return titles;
}

function logBookTitles(bookTitles: string[]): void {
    for (const title of bookTitles) {
        console.log(title);
    }
}
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
