import { ShelfItem } from './interfaces';

export default class Shelf<T extends ShelfItem> {
    private items: Array<T> = new Array<T>();
    
    add(item: T) {
        this.items.push(item);
    }

    getFirst() {
        return this.items[0];
    }

    find(title: string) {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}