import { MyClass } from './my-class.service.ts';

console.log("Hello, world!");
console.log(process.env.EXAMPLE_ENV);

const myClass = new MyClass();
console.log(myClass.b);
