// console.log(typeof typeof 100)\

// const arr = [..."arsen", "b", "c", "d", "e"];
// console.log(arr);

/* OUTPUT 
[
  'a', 'r', 's',
  'e', 'n', 'b',
  'c', 'd', 'e'
]
*/

// console.log(parseInt('10+2'))
// console.log(parseInt('7FM'))
// console.log(parseInt('M7F'))

/* OUTPUT 
10
7
NaN
*/

// isNaN Returns a Boolean value (not a number).
// console.log(isNaN('Arsen'))

/* OUTPUT   
true
*/


// console.log([-1, 1, 2, 3].map(num => {
//     if (num > 0) return;
//     return num * 2;
// }))

/* OUTPUT
[2, undefined, undefined, undefined ]
*/


// function foo() {
//     return;
// }
// console.log(foo())

/* OUTPUT
 undefined
*/

// {
//     function name() {
//         console.log('Arsen')
//     }
// }

// name()

/* OUTPUT
 Arsen
*/

// 'use strict'
// {
//     function name() {
//         console.log('Arsen')
//     }
// }

// name()

/* OUTPUT
 name is not defined
*/

// function name(a, b) {
//     'use strict'
//     a = 100
//     b = 300
//     return args[0], args[1]
//     console.log(a+b)
// }

// console.log(name(10, 20))

/* OUTPUT  
    args Tidak Dideklarasikan

    return args[0], args[1]
    ^
    ReferenceError: args is not defined
*/


// function name(a, b) {
//     'use strict'
//     a = 100
//     b = 300
//     return arg[0] + args[1]
//     console.log(a+b) // WILL NOT EXECUTE
// }

// console.log(name(10, 20))

/* OUTPUT  
    args Tidak Dideklarasikan

    return args[0], args[1]
    ^
    ReferenceError: args is not defined
*/

// function name(a, b) {
//     'use strict' // prevent var A n B to not reassign
//     a = 100;
//     b = 300;
//     return arguments[0] + arguments[1];
//     console.log(a+b) // WILL NOT EXECUTE
// }

// console.log(name(10, 20))

/* OUTPUT  
    30
*/

// function name(a, b) {
//     a = 100;
//     b = 300;
//     return arguments[0] + arguments[1];
//     console.log(a+b) // WILL NOT EXECUTE
// }

// console.log(name(10, 20))

/* OUTPUT  
    400
*/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newArr = arr.find((num) => num > 4) // Only find the first element that match the condition
// === harus sama dengan kondisi dan tipe datanya 
// == hanya sama dengan kondisi saja 
// console.log(newArr)

/* OUTPUT  
    5
*/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newArr = arr.map((num) => num > 4) // to check all result is true or not all of element is match the condition
// === harus sama dengan kondisi dan tipe datanya 
// == hanya sama dengan kondisi saja 
// console.log(newArr)

/* OUTPUT  
    [
  false, false, false,
  false, true,  true,
  true,  true,  true
]
*/
