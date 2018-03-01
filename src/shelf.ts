export default class Shelf<T> {
    private items: Array<T> = new Array<T>();
    
    add(item: T) {
        this.items.push(item);
    }

    getFirst() {
        return this.items[0];
    }
}