showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Interfaces
// # Task 10. Interfaces for Class Types
interface Person {
    name: string;
    email: string;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

class UniversityLibrarian implements Librarian {
    name: 'Uri';
    email: 'uri@gmail.com';
    department: 'physics';

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Ann';
favoriteLibrarian.assistCustomer('Boris');
