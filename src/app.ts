showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Classes
// # Task 11. Creating and Using Classes

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

class ReferenceItem {
    static department: string = 'Classical';
    private _publisher: string;

    constructor(
        public title: string,
        private year: number,
    ) {}

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);  // access instance prop
        console.log(`Department: ${ReferenceItem.department}`);      // access static prop
    }
}

const ref: ReferenceItem = new ReferenceItem('Facts & Figures', 2018);
ref.printItem();
ref.publisher = 'Amazon';
console.log(ref.publisher);
