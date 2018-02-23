namespace Utility {
    export namespace Fees {
        export function calculateLateFee(daysLate) {
            return daysLate * .25;
        }
    }

    export function maxBooksAllowed(age: number) {
        return age < 12 ? 3 : 10;

    }

    function privateFunc() {
        console.log('this is private');
    }
}