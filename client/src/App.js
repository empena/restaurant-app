import React, { Component, } from 'react';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
import { Container, } from "semantic-ui-react";

class App extends Component {
  state = { todos: [], };

  componentDidMount() {
    // TODO make a call to our rails server to get Items
  }

  addItem = (name) => {
    // TODO make api call to rails server to add item
    // TODO update state
  }

  updateTodo = (id) => {
    // TODO make api call to update todo
    // TODO update state
  }

  deleteTodo = (id) => {
    // TODO make api call to delete todo
    // TODO remove it from state
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        //Show menus
      </Container>
    );
  }
}

export default App;