import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <Fragment>
        <h1>Hello {this.state.name}</h1>
        <input
          type="text"
          placeholder="Type your name..."
          onChange={e => this.setState({ name: e.target.value })}
        />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
