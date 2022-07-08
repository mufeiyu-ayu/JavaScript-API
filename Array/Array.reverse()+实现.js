let ary = [1, 2, 3, 4, 5]
// let res = ary.reverse()
// console.log(res) // [ 5, 4, 3, 2, 1 ]
// console.log(ary) // [ 5, 4, 3, 2, 1 ]
Array.prototype.myReverse = function () {
    for (var i = 0; i < this.length / 2; i++) {
        var temp = this[i]
        this[i] = this[this.length - 1 - i]
        this[this.length - 1 - i] = temp
    }
    return this
}
let res1 = ary.myReverse()
console.log(res1)
console.log(ary)
