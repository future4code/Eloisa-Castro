const fileName = process.argv[2]
const newTask = '\n' + process.argv[3]

const fs = require('fs')

try {
  fs.appendFileSync(fileName, newTask, 'utf8')
  console.log('Tarefa adicionada com sucesso!')
} catch(err) {
  console.error(err)
}