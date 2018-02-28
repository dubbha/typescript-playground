showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Classes
// # Task 13. Creating Abstract Classes
abstract class ReferenceItem {
    static department: string = 'Classical';
    private _publisher: string;

    constructor(
        public title: string,
        protected year: number,
    ) {}

    abstract printCitation(): void;

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

class Encyclopedia extends ReferenceItem {
    public edition: number;

    constructor(
        newTitle: string,
        newYear: number,
        edition: number
    ) {
        super(newTitle, newYear);
        this.edition = edition;
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }

    printItem() {
        super.printItem();
        console.log(`Edition: edition ${this.edition}`);
    }
}

const refBook: Encyclopedia = new Encyclopedia('Wiki', 1998, 3);
refBook.printItem();
refBook.printCitation();
