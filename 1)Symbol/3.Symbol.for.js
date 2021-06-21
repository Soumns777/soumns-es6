// Symbol.for 创建一个值,先去搜索之前有没有用 Symbol.for创建过相同的Symbol,如果有就返回，没有就创建
let s1 = Symbol.for('lisa')
let s2 = Symbol.for('lisa')
console.log(s1 === s2)   // true


// 内置 Symbol
Symbol.iterator   // 对象的 Symbol.iterator属性，指向该对象的默认生成遍历器的方法
