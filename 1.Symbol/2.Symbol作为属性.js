// TODO Symbol作为属性 (注:Symbol作为对象属性名时,不能用点运算符)

let MySymbol = Symbol()


// // Soumns 一、第一种方法往obj里添加 MySymbol属性
// let obj = {}
// obj[MySymbol] = 'Soumns777'
// console.log(obj, '--->第一种方法')    // { [Symbol()]: 'Soumns777' }
// console.log(obj[MySymbol])           // Soumns777

// // Soumns 二、第二种方法往obj里添加 MySymbol属性
// let obj = {
//     [MySymbol]: 'Soumns777'  // 这里不能使用 MySymbol作为属性,就会被当成一个字符串，而不是一个Symbol生成的变量
// }
// console.log(obj, '-->第二种方法')  // { [Symbol()]: 'Soumns777 }
// console.log(obj[MySymbol])        // Soumns777

// // Soumns 三、第三种方法往obj里添加 MySymbol属性
// // FIXME Object.defineProperty(添加属性的对象,添加的属性,目标属性所拥有的特性)
// // FIXME Object.defineProperty(obj, MySymbol, {value: 'Soumns777'})
// 配置项: ①value:属性值 ; ②writable:是否可以修改(默认为false); ③configurable 是否可以配置、删除(默认为false); ④enumerable 是否可以枚举(默认为false)

// let obj = {}
// Object.defineProperty(obj, MySymbol, {value: 'Soumns777'})
// console.log(obj, '--->第三种方法')  // // { [Symbol()]: 'Hello World' }
// console.log(obj[MySymbol])         // Soumns777
