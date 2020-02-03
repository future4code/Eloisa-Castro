import React from "react";
import renderer from 'react-test-renderer';
import { Planner } from ".";

describe('Test component Planner', () => {
  test('snapshot', () => {
    const tree = renderer.create(<Planner/>).toJSON();
    expect(tree).toMatchSnapshot()
  })
})