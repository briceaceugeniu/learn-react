import React from "react";
import TodoBanner from "./TodoBanner";
import TodoRow from "./TodoRow";
import TodoCreator from "./TodoCreator";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Raynor",
      todoItems: [
        { action: "Geh heim", done: false },
        { action: "Schalte das Licht aus", done: false },
        { action: "Do 20 pushups", done: false },
        { action: "Trink water", done: true },
      ],
    };
  }

  updateNewTextValue = (value) => {
    this.setState({ newItemText: value });
  };

  createNewTodo = (task) => {
    if (!this.state.todoItems.find((item) => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: task, done: false }],
      });
    }
  };

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  todoTableRows = () =>
    this.state.todoItems.map((item) => (
      <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
    ));

  render() {
    return (
      <div>
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
        <div className={`container-fluid`}>
          <div className={`my-1`}>
            <TodoCreator callback={this.createNewTodo} />
            {/*<input*/}
            {/*  className={`form-control`}*/}
            {/*  value={this.state.newItemText}*/}
            {/*  onChange={(e) => this.updateNewTextValue(e.target.value)}*/}
            {/*/>*/}
            {/*<button*/}
            {/*  className={`btn btn-primary mt-1`}*/}
            {/*  onClick={this.createNewTodo}*/}
            {/*>*/}
            {/*  Add*/}
            {/*</button>*/}
          </div>
          <table className={`table table-striped table-bordered`}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
