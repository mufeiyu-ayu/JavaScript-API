const arr = [1, 2, , 3, 4, [5, , [6]]]

Array.prototype.myFlat = function (index = 1) {
    const newArr = []

    for (let i = 0; i < this.length; i++) {
        // 如果数组中有空项则删除空项目
        if (typeof this[i] === 'undefined') {
            this.splice(i, 1)
        }
        // 如果每一项还是数组 则递归添加到新数组
        if (Array.isArray(this[i])) {
            newArr.push(...this[i].myFlat(index - 1))
        } else {
            newArr.push(this[i])
        }
    }
    return newArr
}
const res = arr.myFlat(2)
console.log(res)
