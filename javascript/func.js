//import { odd, even } from './var' //ES2015 statement
const { odd, even} = require('./var') //ES2015+ statement


function checkOddOrEven(num) {
    if (num % 2) {
        return odd
    } 
    return even
}

//export default checkOddOrEven
module.exports = checkOddOrEven