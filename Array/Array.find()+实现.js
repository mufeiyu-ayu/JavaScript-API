const arr1 = [1, 2, 3, 4, 5]
Array.prototype.myFind = function (fn, thisArg = window) {
    let newValue = undefined,
        arg = this,
        len = arg.length
    for (let i = 0; i < len; i++) {
        if (fn.call(thisArg, arg[i], i, arg)) {
            newValue = arg[i]
            break
        }
    }
    return newValue
}
let ress = arr1.myFind(function (item) {
    return item > 3
})
//  'CascadiaMono',Consolas, 'Courier New', monospace
console.log(arr1)
