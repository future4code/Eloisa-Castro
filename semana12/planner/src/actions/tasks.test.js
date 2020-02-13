import { setAllTasks, getAllTasks, postTask } from "./tasks";
import axios from 'axios';

const allTasksMock = [
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

describe('set all tasks action', () => {
  test('action creator returns action correctly', () => {

    const expectedAction = {
      type: 'SET_ALL_TASKS',
      payload: {
        allTasks: allTasksMock
      }
    }
    
    const action = setAllTasks(allTasksMock)
    
    expect(action).toEqual(expectedAction)
  })
})

describe('get all tasks', () => {
  test('should dispatch action with correct tasks from api', async () => {
    const dispatchMock = jest.fn()

    axios.get = jest.fn(() => {
      return {
        data: allTasksMock
      }
    })

    await getAllTasks()(dispatchMock)

    expect(dispatchMock).toHaveBeenCalledWith(setAllTasks(allTasksMock))
  })
})

describe('post task', () => {
  test('test id create new task', async () => {
    const dispatchMock = jest.fn()
    const bodyMock = {
      text: 'teste',
      day: 1
    }
    axios.post = jest.fn().mockReturnValue({
      status: 200
    })
    await postTask(bodyMock)(dispatchMock)
    expect(dispatchMock).toHaveBeenCalled()
  })
})