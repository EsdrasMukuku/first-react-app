var foo = 30; // does not create window.foo

// Named exports

// export const sum = (a, b) => a + b;
// export const numbers = [5, 10, 15, 20, 25, 30];

const sum = (a, b) => a + b;
const numbers = [5, 10, 15, 20, 25, foo];

export { sum, numbers };

// Default export

const product = (a, b) => a * b;

export default product