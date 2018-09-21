import React from 'react';
import Titles from './Titles';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('Titles component should render as expected', () => {
    const component = shallow(<Titles />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
})
