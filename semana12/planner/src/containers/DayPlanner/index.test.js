import { shallow } from "enzyme";
import { DayPlanner, DayText, StyledFormControlLabel } from ".";
import React from 'react';

describe('Day Planner', () => {
  test('test props of DayPlanner', () => {
    const textMock = "Domingo"
    const component = shallow(<DayPlanner key={''} text={textMock}/>)

    const dayText = component.find(DayText)

    expect(dayText.props().children).toBe('Domingo')
  })

  test('test tasks list', () => {
    const tasksMock = [
      {
        "id": "1",
        "day": "2",
        "text": "Lavar a louça"
      },
      {
        "id": "2",
        "day": "3",
        "text": "Lavar roupa"
      }
    ]
    const getTasksMock = jest.fn()
    const component = shallow(<DayPlanner getTasks={getTasksMock} key={''} text={''} tasksList={tasksMock}/>)
    const styledFormControlLabel = component.find(StyledFormControlLabel)
    expect(styledFormControlLabel).toHaveLength(2)
  })

})