import { ReferenceItem } from "./classes";

export default class Encyclopedia extends ReferenceItem {
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
