import React from 'react';
import Person from './Person';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('Person component should render as expected', () => {
    const inf = ["MARK", "PRENTICE", "2413 W TEXAS ST", "MOSES LAKE", "WA"];
    const component = shallow(<Person inf={inf} num={1} />);
    const tree = toJson(component);
    expect(tree.children[0].children.length).toBe(6);
    expect(tree).toMatchSnapshot();
});
test('Person component should render with undefined value in this.props.inf', () => {
    const inf = ["MARK", undefined, "2413 W TEXAS ST", "MOSES LAKE", "WA"];
    const component = shallow(<Person inf={inf} num={1} />);
    const tree = toJson(component);
    expect(tree.children[0].children.length).toBe(5);
    expect(tree).toMatchSnapshot();
});
test('Person component should render with this.props.num==undefined', () => {
    const inf = ["MARK", "PRENTICE", "2413 W TEXAS ST", "MOSES LAKE", "WA"];
    const component = shallow(<Person inf={inf} num={undefined} />);
    const tree = toJson(component);
    expect(tree.children[0].children.length).toBe(5);
    expect(tree).toMatchSnapshot();
});
test('Person component should not render the inf inside of the div', () => {
    const inf = [];
    const component = shallow(<Person inf={inf} num={1} />);
    const tree = toJson(component);
    expect(tree.children).toBe(null);
    expect(tree).toMatchSnapshot();
});