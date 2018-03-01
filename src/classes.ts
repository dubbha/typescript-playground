import * as Interfaces from './interfaces';
import { sealed, logger, writable } from './decorators';

@logger
@sealed('UniversityLibrarian')
class UniversityLibrarian implements Interfaces.Librarian {
    name = 'Uri';
    email = 'uri@gmail.com';
    department = 'physics';

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity() {
        console.log('teaching community');
    }
}

class ReferenceItem { 
    constructor(
        public title: string,
        public year: number,
    ) {}

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
    }
}

export { UniversityLibrarian, ReferenceItem }
