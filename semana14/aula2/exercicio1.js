function getArrInformation(arr) {
    var oddNumbers = arr.filter(function (number) { return (number % 2 !== 0); });
    var sum = arr.reduce(function (acc, currentValue) { return acc + currentValue; });
    return {
        totalOfNumbers: arr.length,
        totalOfOdd: oddNumbers.length,
        arrSum: sum
    };
}
console.log(getArrInformation([1, 2, 3]));
