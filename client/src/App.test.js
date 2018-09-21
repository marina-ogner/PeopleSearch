import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App component should render as expected', () => {
  const component = shallow(<App />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})

// only can test if the line in the App.js changed to const api_call = await fetch(`http://localhost:5000/api/${firstName}/${lastName}/${peopleState}`);
// but it creates CORS problem:
// test('App component should clear the result section and start loading process with all valid inputs', () => {
//   const component = shallow(<App />);
//   const e = { target: { elements: { firstName: { value: "MARK" }, lastName: { value: "PRENTISE" }, state: { value: "WA" } } }, preventDefault: () => { } };
//   component.instance().getPeople(e);
//   expect(component.state().people.length).toBe(0);
//   expect(component.state().error).toBe(undefined);
//   expect(component.state().loading).toBe(true);
//   const tree = toJson(component);
//   expect(tree).toMatchSnapshot();
// });
// test('App component should clear the result section with even one not valid input', () => {
//   const component = shallow(<App />);
//   const e = { target: { elements: { firstName: { value: "" }, lastName: { value: "PRENTISE" }, state: { value: "WA" } } }, preventDefault: () => { } };
//   component.instance().getPeople(e);
//   expect(component.state().people.length).toBe(0);
//   expect(component.state().error).toBe(undefined);
//   expect(component.state().loading).toBe(false);
//   const tree = toJson(component);
//   expect(tree).toMatchSnapshot();
// });
// test('App component should clear the result section with even one not valid input', () => {
//   const component = shallow(<App />);
//   const e = { target: { elements: { firstName: { value: "MARK" }, lastName: { value: "" }, state: { value: "WA" } } }, preventDefault: () => { } };
//   component.instance().getPeople(e);
//   expect(component.state().people.length).toBe(0);
//   expect(component.state().error).toBe(undefined);
//   expect(component.state().loading).toBe(false);
//   const tree = toJson(component);
//   expect(tree).toMatchSnapshot();
// });
// test('App component should clear the result section with even one not valid input', () => {
//   const component = shallow(<App />);
//   const e = { target: { elements: { firstName: { value: "MARK" }, lastName: { value: "PRENTISE" }, state: { value: "" } } }, preventDefault: () => { } };
//   component.instance().getPeople(e);
//   expect(component.state().people.length).toBe(0);
//   expect(component.state().error).toBe(undefined);
//   expect(component.state().loading).toBe(false);
//   const tree = toJson(component);
//   expect(tree).toMatchSnapshot();
// });
// test('App component should clear the result section with even one not valid input like "  "', () => {
//   const component = shallow(<App />);
//   const e = { target: { elements: { firstName: { value: "  " }, lastName: { value: "PRENTISE" }, state: { value: "WA" } } }, preventDefault: () => { } };
//   component.instance().getPeople(e);
//   expect(component.state().people.length).toBe(0);
//   expect(component.state().error).toBe(undefined);
//   expect(component.state().loading).toBe(false);
//   const tree = toJson(component);
//   expect(tree).toMatchSnapshot();
// });
// test('App component should clear the result section and start loading process even with input like "  MARK "', () => {
//   const component = shallow(<App />);
//   const e = { target: { elements: { firstName: { value: "  MARK " }, lastName: { value: "PRENTISE" }, state: { value: "WA" } } }, preventDefault: () => { } };
//   component.instance().getPeople(e);
//   expect(component.state().people.length).toBe(0);
//   expect(component.state().error).toBe(undefined);
//   expect(component.state().loading).toBe(true);
//   const tree = toJson(component);
//   expect(tree).toMatchSnapshot();
// });
