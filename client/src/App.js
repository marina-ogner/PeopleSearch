import React from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import People from "./components/People";
import fetch from 'isomorphic-fetch';

class App extends React.Component {

  state = {
    people: [],
    error: undefined,
    loading: false
  }

  getPeople = async (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const peopleState = e.target.elements.state.value;
    if (firstName.trim().length > 0 && lastName.trim().length > 0 && peopleState.trim().length > 0) {
      this.setState({
        people: [],
        error: undefined,
        loading: true
      })
      const api_call = await fetch(`api/${firstName}/${lastName}/${peopleState}`);
      const data = await api_call.json();
      if (data.datafinder.results) {
        this.setState({
          people: data.datafinder.results,
          error: "",
          loading: false
        })
      }
      else {
        this.setState({
          people: [],
          error: "No result Found",
          loading: false
        });
      }
    }
    else {
      this.setState({
        people: [],
        error: undefined,
        loading: false
      })
    }
  }
  render() {
    return (
      <div className="container">
        <div className="center">
          <Titles />
        </div>
        <Form load={this.state.loading} getPeople={this.getPeople} />
        <People
          load={this.state.loading}
          error={this.state.error}
          people={this.state.people.map(person => ([person.FirstName, person.LastName, person.Address, person.City, person.State]))}
        />
      </div>
    );
  }
};
export default App;



