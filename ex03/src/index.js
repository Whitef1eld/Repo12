// only change code below this line
function rangeOfNumbers(startN, endN) {
    if(startN > endN) {
        return "The starting number will always be less than or equal to the ending number";
    } else if(startN - endN === 0) {
        return [startN];
    } else {
        const result = rangeOfNumbers(startN, endN - 1);
        result.push(endN);
        return result;
    }
}
// only change code above this line
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));

module.exports = rangeOfNumbers;
