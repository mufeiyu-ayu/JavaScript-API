// push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
const ary = [1, 2, 3, 4]
// const res = ary.push(5, 6, 7)
// console.log(res) // 7
// console.log(ary) // [1,2,3,4,5,6,7]
Array.prototype.Mypush = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
    }
    return this.length
}
const res1 = ary.Mypush(5, 6)
