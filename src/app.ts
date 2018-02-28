showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Functions
// # Task 09. Extending Interface
interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

const favoriteAuthor: Author = {
    name: 'Ann',
    email: 'ann@site.com',
    numBooksPublished: 3,
};
const favoriteLibrarian: Librarian = {
    name: 'Boris',
    email: 'boris@gmail.com',
    department: 'classical',
    assistCustomer: (custName: string) => console.log(`Assist ${custName}`),
}
