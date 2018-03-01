import { Category } from '../enums';
import { Book } from '../interfaces';

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2);
}

export function getAllBooks(): Book[] {
    const books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript  },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript  }
    ];

    return books;
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const allBooks = getAllBooks();
    const titles: string[] = [];

    for (const cur of allBooks) {
        if (cur.category === category) {
            titles.push(cur.title);
        }
    }
    return titles;
}

export interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

export function getBooksByCategory(
    category: Category,
    callback: LibMgrCallback,
): void {
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Titles', titles);
    }
}

export function getBooksByCategoryPromise(
    category: Category
): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles: string[] = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });

    return p;
}
