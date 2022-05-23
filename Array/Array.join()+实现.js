const ary = [1, 2, 3, 4, undefined, 5, null]
const res = ary.join()
console.log(res) // '1,2,3,4' string
// console.log(ary) // [1,2,3,4]
console.log(ary.join('-')) // ‘1-2-3-4’
// 如果一个元素为 undefined 或 null，它会被转换为空字符串。
// console.log([1, 2, 3, undefined, 4, null, 5].join()) // '1,2,3,,4,,5'
Array.prototype.myJoin = function (str) {
    const arr = this
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == undefined || arr[i] == null) {
            arr[i] = ''
        }
        if (i === arr.length - 1) {
            // res += arr[i]
            res += arr[i]
        } else {
            res += arr[i] + str
        }
    }
    return res
}
console.log(ary.myJoin(','))
