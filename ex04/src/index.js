// only change code below this line
function sumFibonacci(num) {
    var result = 0;
    let noOne = 0, noTwo = 1;
    while(noTwo <= num){
        if (num === 1) {
            result = 1;
        } else if (noTwo % 2 !== 0) {
            result += noTwo;
        }
        noTwo += noOne;
        noOne = noTwo - noOne;
    }
    return result;
}
// only change code above this line
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;
