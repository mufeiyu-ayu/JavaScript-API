function test() {
    let ary = [4, 5, 6].concat.apply({ name: 'ada' }, arguments)
    console.log(ary)
}
test([1, 2, 3], [4])
