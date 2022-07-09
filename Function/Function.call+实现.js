// 给所有的函数添加一个hycall的方法
Function.prototype.hycall = function (thisArg, ...args) {
    // 在这里可以去执行调用的那个函数(foo)
    // 问题: 得可以获取到是哪一个函数执行了hycall
    // 1.获取需要被执行的函数
    var fn = this

    // 2.对thisArg转成对象类型(防止它传入的是非对象类型)
    thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

    // 3.调用需要被执行的函数
    thisArg.fn = fn
    var result = thisArg.fn(...args)
    delete thisArg.fn

    // 4.将最终的结果返回出去
    return result
}

function sum(num1, num2) {
    console.log('sum函数被执行', this, num1, num2)
    console.log(this.num1)

    return num1 + num2
}
// console.log(sum.call({}, 11, 20))

var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
]

for (var i = 0; i < animals.length; i++) {
    ;(function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species + ': ' + this.name)
        }
        this.print()
    }.call(animals[i], i))
}
