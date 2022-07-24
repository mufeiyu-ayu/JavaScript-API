const arr = [1, 2, 3, 4]

// const res = arr.findIndex((item) => item > 2)

Array.prototype.myFindIndex = function (fn, thisArg = window) {
    let index = -1,
        arg = this,
        len = arg.length
    for (let i = 0; i < len; i++) {
        if (fn.call(thisArg, arg[i], i, arg)) {
            index = i
            break
        }
    }
    return index
}

const res = arr.myFindIndex(function (item) {
    return item > 6
})
console.log(res) // -1
console.log(arr)
const fn = () => {
    console.log(res) //但是这个大帮助大家庭
}
