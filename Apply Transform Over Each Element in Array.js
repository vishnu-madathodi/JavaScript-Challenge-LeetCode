/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = [], i = 0;
    arr.forEach( (item) => {
        newArr[i] = fn(item, i);
        i++;
    });
    return newArr;
};