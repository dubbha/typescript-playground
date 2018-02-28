showHello('app', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ### Functions
// # Task 04. Function Type
function createCustomerId(name: string, id: number): string {
    return `${name}${id}`;
}

let myId: string;
myId = createCustomerId('Ann', 10);
console.log(myId);

let idGenerator: (name: string, id: number) => string;
idGenerator = createCustomerId;
console.log(idGenerator('Ben', 20));
