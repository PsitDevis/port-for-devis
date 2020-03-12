import React from 'react';
import { shallow } from 'enzyme';

import Button from './';

describe('Button', () => {
  test('should match snapshot', () => {
    const component = shallow(<Button />);
  
    expect(component).toMatchSnapshot();
  });

  test('should render with a text when exists', () => {
    const component = shallow(<Button text={'Test'} />);
  
    expect(component.text()).toEqual('Test');
  });

  test('should render with Click here text if none is passed', () => {
    const component = shallow(<Button />);
  
    expect(component.text()).toEqual('Click here');
  });
});