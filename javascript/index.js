const { odd, even} = require('./var')
const checkNubmer = require('./func')

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd
    }
    return even
}

console.log(checkNubmer(0))
console.log(checkStringOddOrEven('hello'))