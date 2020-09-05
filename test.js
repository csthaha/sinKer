// let arr = [1, 2, 3];
// arr.name = 'cst';
// for (let i of arr) {
//     console.log(i)
// }

// for (let index in arr) {
//     console.log('index:', index)
// }
// console.log(arr)

// function add(number) {
//     if (typeof number !== 'number' || Number.isNaN(number)) {
//         throw new Error('请输入数字～');
//     }
//     console.log(this, ' this ', this + number)
//     return this + number
// }
// function minus(number) {
//     if (typeof number !== 'number' || Number.isNaN(number)) {
//         throw new Error('请输入数字～');
//     }
//     return this - number
// }
// Number.prototype.add = add
// Number.prototype.minus = minus

// console.log((5).add(3).minus(2)) // 6

// let array = [1, 2, 3, 4, 8, 11];
// for (let i = 0; i < array.length / 2; i++) {
//     [array[i], array[array.length - i - 1]] = [array[array.length - i - 1], array[i]]
// }
// console.log(array)


function longStr(str) {
    let len = str.length;
    let i = 0, j = 1, res = 1, arr = [str[0]], m = 0, n = 0,longStr = ''
    while (j < len) {
        if (!arr.includes(str[j])) {
            arr.push(str[j]);
            if (j - i + 1 > res) {
                m = j;
                n = i;
                res = j - i + 1
            }
            j++;
        } else {
            i = arr.indexOf(str[j]) + 1;
            
            j++;
        }
    }
    for(let i = n; i <= m; i++){
        longStr += str[i]
    }
    return [res, longStr];
}

console.log(longStr('abcdbefgkaemlnopqyta'))