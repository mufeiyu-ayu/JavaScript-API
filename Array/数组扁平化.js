const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9], [[[[[10]]]]]]

// 1.
const flatten1 = (arr) => {
    const newArr = []
    arr.forEach((element) => {
        if (Array.isArray(element)) {
            newArr.push(...flatten1(element))
        } else {
            newArr.push(element)
        }
    })
    return newArr
}
const arr1 = flatten1(problem) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 2 flat(infinity)
const flatten2 = (arr) => {
    return arr.flat(Infinity)
}
const arr2 = flatten2(problem)
// 3.concat
const flatten3 = (arr) => {
    let newArr = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            newArr = newArr.concat(flatten3(item))
        } else {
            newArr.push(item)
        }
    }
    return newArr
}
const arr3 = flatten3(problem)


