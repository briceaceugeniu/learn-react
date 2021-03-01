import React from "react";
import TodoBanner from "./TodoBanner";
import TodoRow from "./TodoRow";
import TodoCreator from "./TodoCreator";
import VisibilityControl from "./VisibilityControl";

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
      showCompleted: true,
    };
  }

  updateNewTextValue = (value) => {
    this.setState({ newItemText: value });
  };

  createNewTodo = (task) => {
    if (!this.state.todoItems.find((item) => item.action === task)) {
      this.setState(
        {
          todoItems: [...this.state.todoItems, { action: task, done: false }],
        },
        () => localStorage.setItem("todos", JSON.stringify(this.state))
      );
    }
  };

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  todoTableRows = (doneValue) =>
    this.state.todoItems
      .filter((item) => item.done === doneValue)
      .map((item) => (
        <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
      ));

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(
      data != null
        ? JSON.parse(data)
        : {
            userName: "Raynor",
            todoItems: [
              { action: "Geh heim", done: false },
              { action: "Schalte das Licht aus", done: false },
              { action: "Do 20 pushups", done: false },
              { action: "Trink water", done: true },
            ],
            showCompleted: true,
          }
    );
  };

  render() {
    return (
      <div>
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
        <div className={`container-fluid`}>
          <div className={`my-1`}>
            <TodoCreator callback={this.createNewTodo} />
          </div>
          <table className={`table table-striped table-bordered`}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows(false)}</tbody>
          </table>
          <div className={`bg-secondary text-white text-center p-2`}>
            <VisibilityControl
              isChecked={this.state.showCompleted}
              description={`CompletedTask`}
              callback={(checked) => this.setState({ showCompleted: checked })}
            />
            {this.state.showCompleted && (
              <table className={`table table-striped table-bordered`}>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Done</th>
                  </tr>
                </thead>
                <tbody>{this.todoTableRows(true)}</tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }
}
