import * as moment from 'moment';
import { writeFile, readFile } from 'fs';

//variável representanto o evento
type activity = {
  name: string,
  description: string,
  date: any,
  initialTime: string,
  endTime: string,
}

const activityName = process.argv[2]
const activityDescription = process.argv[3]
const activityDate = moment(process.argv[4], "DD/MM/YYYY").format('DD/MM/YYYY')
const activityInitialTime = moment(process.argv[5], 'HH:mm').format('HH:mm')
const activityEndTime = moment(process.argv[6], 'HH:mm').format('HH:mm')

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

getActivities.then((allData: any[]) =>{
  saveNewActivity(allData)
  allData.forEach(item => {
    console.log('')
    console.log('Atividade:', item.name, "-", item.description)
    console.log('Data:', item.date)
    console.log('Horário:', item.initialTime, "-", item.endTime)
    console.log('')
    console.log('---X---')
  })
}).catch( () => {
  console.error("Erro ao salvar")
})

function saveNewActivity(dataArr: any[]): void {
  if (activityName !== undefined) {
  const newActivity: activity = {
    name: activityName,
    description: activityDescription,
    date: activityDate,
    initialTime: activityInitialTime,
    endTime: activityEndTime,
  }

  const allActivities = dataArr

  allActivities.push(newActivity)

  const itensToAdd = JSON.stringify(allActivities)

  const saveActivities = new Promise ((resolve, reject) => {
    writeFile('allActivities.txt', itensToAdd, function(): void{
      resolve(console.log('Salvo com sucesso'))
    })
  })
  }
}
