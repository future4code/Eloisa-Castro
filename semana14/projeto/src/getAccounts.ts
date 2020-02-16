import { getAllAccounts } from "./getAllAccounts"

getAllAccounts.then((data: any[]) => {
  console.log(data)
}).catch(err => {
  console.error(err)
})
