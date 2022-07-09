let ary = [1, 3, 4, 5, 7, 2, , 4, 8, 0, 6, 7]
let result = ary.sort() // [ 0, 1, 2, 3, 4, 4, 5, 6, 7, 7, 8, <1 empty item> ]
let ary1 = [10, 42, 34, 53, 13, 45, 87, 24]
let result2 = ary1.sort((a, b) => b - a) // 降序，反之升序
result[0] = 100
console.log(ary)
console.log(result)
