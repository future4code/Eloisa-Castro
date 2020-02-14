function getArrInformation( arr: number[]): object {
  const oddNumbers = arr.filter( number => (
    number % 2 !== 0
  ))
  const sum = arr.reduce( (acc: number, currentValue: number) => { return acc + currentValue })
  return {
    totalOfNumbers: arr.length,
    totalOfOdd: oddNumbers.length,
    arrSum: sum,
  }
}

console.log(getArrInformation([1,2,3]))