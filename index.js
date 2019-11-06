let arr = [1, 2, 3, 4, 5]
let fn = function (data) {
     for (i in data) {
        console.log(i)
    }

}
console.log(fn)
module.exports=fn(arr)