const operationType = process.argv[2]
const firstValue = process.argv[3]
const secondValue = process.argv[4]

switch (operationType) {
  case 'add':
    console.log("Resposta:", Number(firstValue) + Number(secondValue))
    break;

  case 'sub':
    console.log("Resposta:", Number(firstValue) - Number(secondValue))
    break;

  case 'mult':
    console.log("Resposta:", Number(firstValue) * Number(secondValue))
    break;
  
  case 'div':
    console.log("Resposta:", Number(firstValue) / Number(secondValue))
    break;

  default:
    break;
}