import { shallow } from "enzyme";
import React from 'react';
import { TaskForm, SubmitButton } from './index';
import renderer from 'react-test-renderer';

describe('Test component PlannerForm', () => {
  test('test form submit', () => {
    const onSubmitMock = jest.fn()
    const component = shallow(<TaskForm onSubmit={onSubmitMock}/>)

    const submitButton = component.find(SubmitButton)

    submitButton.simulate('click')

    expect(onSubmitMock).toHaveBeenCalled()
  })

  test('snapshot', () => {
    const tree = renderer.create(<TaskForm/>).toJSON();
    expect(tree).toMatchSnapshot()
  })
})