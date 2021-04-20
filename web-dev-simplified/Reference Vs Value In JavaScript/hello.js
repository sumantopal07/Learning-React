/**PASS BY VALUE
 * of primitives like string, number
 */
let a = 10;
let b = [1,2];
let c= b;// c is storing the memory address of b
c.push(3);
console.log(a);
console.log(b);
console.log(c);

// arrays and objects are pass by reference in js

let a = 10
let b="hi"
let c = [1,2]
let d= c;
d= [3,4,5]
// all a,b,c and d are different 
console.log(a);
console.log(b);
console.log(c);
console.log(d);
