let ary = [1, 2, 3, 4]
let res = ary.shift()
// console.log(res) // 1
// console.log(ary) // [2,3,4]
Array.prototype.myShift = function () {
    let len = this.length,
        remove = this[0]
    for (let i = 1; i < len; i++) {
        this[i - 1] = this[i]
    }
    this.length--
    return remove
}
let ary1 = [1, 2, 3, 4, 5]
console.log(ary1.myShift())
console.log(ary1)
