import React from "react";

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
      newItemText: "",
    };
  }

  updateNewTextValue = (value) => {
    this.setState({ newItemText: value });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(
        (item) => item.action === this.state.newItemText
      )
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false },
        ],
        newItemText: "",
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
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleTodo(item)}
          />
        </td>
      </tr>
    ));

  render() {
    return (
      <div>
        <h4 className={`bg-primary text-white text-center p-2`}>
          {this.state.userName}'s To Do List (
          {this.state.todoItems.filter((i) => !i.done).length} items to do)
        </h4>
        <div className={`container-fluid`}>
          <div className={`my-1`}>
            <input
              className={`form-control`}
              value={this.state.newItemText}
              onChange={(e) => this.updateNewTextValue(e.target.value)}
            />
            <button
              className={`btn btn-primary mt-1`}
              onClick={this.createNewTodo}
            >
              Add
            </button>
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
