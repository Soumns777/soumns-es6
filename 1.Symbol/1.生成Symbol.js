// TODO 生成Symbol（每一个Symbol都是独一无二的）
let s1 = Symbol()
let s2 = Symbol()
console.log(s1 === s2)  // false

// TODO 生成的Symbol独一无二
let s3 = Symbol('11')
let s4 = Symbol('11')
console.log(s3 === s4)   // false
