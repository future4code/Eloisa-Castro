import { readFile } from 'fs';

const getActivities = new Promise ((resolve, reject) => {
  readFile('allActivities.txt', function(err, data) {
    if (err) {
      reject(err)
    }
    const dataToString = data.toString()
    const allData = JSON.parse(dataToString)
    resolve(allData)
  })
})

getActivities.then((allData: string[]) =>{
  allData.forEach(item => {
    console.log(item)
  })
}).catch( () => {
  console.error("Erro ao salvar")
})

