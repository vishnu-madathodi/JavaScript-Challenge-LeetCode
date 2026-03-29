/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [], i = 0, j = 0;
    arr.forEach((item) => {
        if(Boolean(fn(item, i))){
            newArr[j] = item;
            j++;
        }
        i++;
    });
    return newArr;
};