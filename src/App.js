import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // Component 생성될 때 바로 시작되는 메소드
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, book: true });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
