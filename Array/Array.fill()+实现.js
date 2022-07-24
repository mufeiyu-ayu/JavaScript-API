// arr.fill(value[, start[, end]])
// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

const array1 = [1, 2, 3, 4]
console.log(array1.fill(0, 1, 2)) // [ 1, 0, 3, 4 ]

//
Array.prototype.myFilii = function (value, start = 0, end = this.length) {
    for (let i = start; i < end; i++) {
        this[i] = value
    }
    return this
}
