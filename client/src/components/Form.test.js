import React from 'react';
import Form from './Form';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

test('Form component should render as expected', () => {
    const component = shallow(<Form />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
})
test('Form component validation with a missing input should keep entered values and create an error', () => {
    const getPeople = async (e) => { };
    const component = mount(<Form getPeople={getPeople} />);
    const inp = component.find('input');
    inp.at(0).simulate("change", { target: { value: "MARK", name: "firstName" } });
    inp.at(1).simulate("change", { target: { value: "PRENTICE", name: "lastName" } });
    inp.at(2).simulate("change", { target: { value: "", name: "state" } });
    const form = component.find('form');
    form.simulate('submit', { preventDefault: () => { } });
    expect(component.state().firstName.length).not.toBe(0);
    expect(component.state().lastName.length).not.toBe(0);
    expect(component.state().state.length).toBe(0);
    expect(component.state().firstNameError.length).toBe(0);
    expect(component.state().lastNameError.length).toBe(0);
    expect(component.state().stateError.length).not.toBe(0);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
})
test('Form component validation with two missing inputs should keep entered value and create errors', () => {
    const getPeople = async (e) => { };
    const component = mount(<Form getPeople={getPeople} />);
    const inp = component.find('input');
    inp.at(0).simulate("change", { target: { value: "", name: "firstName" } });
    inp.at(1).simulate("change", { target: { value: "", name: "lastName" } });
    inp.at(2).simulate("change", { target: { value: "WA", name: "state" } });
    const form = component.find('form');
    form.simulate('submit', { preventDefault: () => { } });
    expect(component.state().firstName.length).toBe(0);
    expect(component.state().lastName.length).toBe(0);
    expect(component.state().state.length).not.toBe(0);
    expect(component.state().firstNameError.length).not.toBe(0);
    expect(component.state().lastNameError.length).not.toBe(0);
    expect(component.state().stateError.length).toBe(0);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
})
test('Form component validation with all missing inputs', () => {
    const getPeople = async (e) => { };
    const component = mount(<Form getPeople={getPeople} />);
    const inp = component.find('input');
    inp.at(0).simulate("change", { target: { value: "", name: "firstName" } });
    inp.at(1).simulate("change", { target: { value: "", name: "lastName" } });
    inp.at(2).simulate("change", { target: { value: "", name: "state" } });
    const form = component.find('form');
    form.simulate('submit', { preventDefault: () => { } });
    expect(component.state().firstName.length).toBe(0);
    expect(component.state().lastName.length).toBe(0);
    expect(component.state().state.length).toBe(0);
    expect(component.state().firstNameError.length).not.toBe(0);
    expect(component.state().lastNameError.length).not.toBe(0);
    expect(component.state().stateError.length).not.toBe(0);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
})
test('Form component validation with all entered inputs', () => {
    const getPeople = async (e) => { };
    const component = mount(<Form getPeople={getPeople} />);
    const inp = component.find('input');
    inp.at(0).simulate("change", { target: { value: "MARK", name: "firstName" } });
    inp.at(1).simulate("change", { target: { value: "PRENTICE", name: "lastName" } });
    inp.at(2).simulate("change", { target: { value: "WA", name: "state" } });
    const form = component.find('form');
    form.simulate('submit', { preventDefault: () => { } });
    expect(component.state().firstName.length).toBe(0);
    expect(component.state().lastName.length).toBe(0);
    expect(component.state().state.length).toBe(0);
    expect(component.state().firstNameError.length).toBe(0);
    expect(component.state().lastNameError.length).toBe(0);
    expect(component.state().stateError.length).toBe(0);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
})
