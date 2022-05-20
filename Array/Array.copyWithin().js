/* 
arr.copyWithin(target[, start[, end]])
target 复制元素起始位置
start要复制的元素开始位置 可省略，则从0开始复制
end 要复制元素的结束位置（不包括end），可省略，默认到数组最后一位
 */
const arr1 = [1, 2, 3, 4]
console.log(arr1.copyWithin(0, 1, 2)) // 2,2,3,4
console.log(arr1, '----')
console.log(arr1.copyWithin(1)) // 2,2,3,4
console.log(arr1, '----')
console.log(arr1.copyWithin(0, 1)) // 2,3,4,4
console.log(arr1, '----')
//