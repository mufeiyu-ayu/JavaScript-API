// ==
// 1.
console.log(undefined == undefined) // true
console.log(undefined == null) // true
console.log(null == null) // true
// 1.Number
console.log(NaN == NaN) // flase
console.log(1 == 1) // true
console.log(+0 == -0) // true
//2.string
console.log('aa' == 'aa') // true
console.log(true == 1) // true
console.log(true == []) // flase
console.log(true == 0) // false
/* 如果Type ( x ) 是 Number 并且Type ( y ) 是 String，则
返回比较结果x == ToNumber ( y )。 */
console.log(11 == 'adas') // false
/* 如果Type ( x ) 是 Boolean ，则返回比较结果ToNumber ( x ) == y
 */
console.log(true == 'dada') // false
/* 如果Type ( x ) 是 String 或 Number 并且Type ( y ) 是 Object，则
返回比较结果x == ToPrimitive ( y )。 //将对象类型转化为非对象类型 */
console.log(toString({ name: 'aa' })) // [object Undefined]
console.log('11' == toString({ name: 'adada' })) // false
// samevalue
/* 
主要对于NaN和NaN以及+0和-0做出了完善判断
 */
