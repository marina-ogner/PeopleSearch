import React from 'react';
import People from './People';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('People component should render as expected', () => {
    const people = [["MARK", "PRENTICE", "2413 W TEXAS ST", "MOSES LAKE", "WA"], ["MARK", "PRENTICE", "11107 50TH AVE SE", "EVERETT", "WA"]];
    const component = shallow(<People people={people} />);
    const tree = toJson(component);
    expect(tree.children[0].children.length).toBe(2);
    expect(tree).toMatchSnapshot();
});
test('People component should render as expected with only one matching person', () => {
    const people = [["MARK", "PRENTICE", "2413 W TEXAS ST", "MOSES LAKE", "WA"]];
    const component = shallow(<People people={people} />);
    const tree = toJson(component);
    expect(tree.children[0].children.length).toBe(1);
    expect(tree).toMatchSnapshot();
});
test('People component should render as expected without data about people (with this.prop.people=[])', () => {
    const people = [];
    const component = shallow(<People people={people} />);
    const tree = toJson(component);
    expect(tree.children).toBe(null);
    expect(tree).toMatchSnapshot();
});
test('People component should render as expected when the data is not fetching (with this.prop.people=false)', () => {
    const people = [];
    const load = false;
    const component = shallow(<People people={people} load={load} />);
    const tree = toJson(component);
    expect(tree.children).toBe(null);
    expect(tree).toMatchSnapshot();
});
test('People component should render as expected when the data is fetching (with this.prop.people=true)', () => {
    const people = [];
    const load = true;
    const component = shallow(<People people={people} load={load} />);
    const tree = toJson(component);
    expect(tree.children[0].children.length).toBe(1);
    expect(tree).toMatchSnapshot();
});
test('People component should render as expected with error (with this.prop.error)', () => {
    const people = [];
    const error = "something is wrong";
    const component = shallow(<People people={people} error={error} />);
    const tree = toJson(component);
    expect(tree.children[0].children.length).toBe(1);
    expect(tree).toMatchSnapshot();
});
test('People component should render as expected without error (!this.prop.error)', () => {
    const people = [];
    const error = undefined;
    const component = shallow(<People people={people} error={error} />);
    const tree = toJson(component);
    expect(tree.children).toBe(null);
    expect(tree).toMatchSnapshot();
});
