const arr1 = [1, 2, 3, 4, [5], [[6]], [[[7]]]]

/* 
flatMap 能用于在map期间增删项目（也就是修改items的数量）。换句话说，它允许你遍历很多项使之成为另一些项（靠分别把它们放进去来处理），而不是总是一对一。 从这个意义上讲，它的作用类似于 filter的对立面。只需返回一个1项元素数组以保留该项，返回一个多元素数组以添加项，或返回一个0项元素数组以删除该项 而map产生的映射数组总是和原数组的数量相等的
 */
// const res = arr1.flatMap((item, index) => item * 2)
const res = arr1.flatMap((item) => (item === 3 ? [] : item * 3))
console.log(res)
