import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }

  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log("Goodbye, crelue");
  }

  add = () => {
    // setState: 새로운 상태를 객체로 지정해줌
    // setState를 호출할 때마다 react는 새로운 state와 함꼐 ender function을 호출함
    // this.setState({ count: this.state.cont + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    // this.setState({ count: this.state.cont - 1 });
    this.setState((current) => ({ count: current.count - 1 }));
  };

  render() {
    console.log("Being Rendering");
    return (
      <div>
        <h1> The number is : {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
