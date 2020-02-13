import { setAllTasks } from "../actions/tasks"
import tasks from './tasks'


describe('Tasks reducers', () => {
  const currentState = {
    allTasks: []
  }

  test('test set all tasks', () => {
    const taskList = [
      {
        "id": "1",
        "day": "1",
        "text": "Lavar a louça"
      },
      {
        "id": "2",
        "day": "2",
        "text": "Lavar a louça"
      },
      {
        "id": "3",
        "day": "0",
        "text": "Lavar a louça"
      },
    ]
    const action = setAllTasks(taskList)
    const neWState = tasks(currentState, action)
    expect(neWState.allTasks).toHaveLength(3)
  })
})