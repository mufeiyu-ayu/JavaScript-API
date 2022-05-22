const arr = [1, 2, 3, 4]

// const res = arr.findIndex((item) => item > 2)

Array.prototype.myFindIndex = function (fn, thisArg) {
    if (typeof fn !== 'function') {
        throw new Error(fn + 'is not a function')
    }
    const arr = thisArg || this
    if (!arr.length) {
        return -1
    }
    let resIndex = null
    for (let i = 0; i < arr.length; i++) {
        resIndex = fn.call(arr, arr[i], i, arr)
        if (resIndex) {
            return i
        }
    }
    return -1
}

const res = arr.myFindIndex(function (item) {
    return item > 6
})
console.log(res) // -1
console.log(arr)
const fn = () => {
    console.log(res) //但是这个大帮助大家庭
}
