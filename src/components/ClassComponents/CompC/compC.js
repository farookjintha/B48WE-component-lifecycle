import React from "react";
import CompD from "../CompD/compD";

class CompC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor is called...");
  }

  componentDidMount = () => {
    console.log("Component Did Mount is called..");
  };

  componentDidUpdate = () => {
    console.log("Component Did Update is called...");
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("Render is called...");
    return (
      <div>
        <h2>CompC</h2>
        <h3>Count: {this.state.count} </h3>
        <button onClick={this.handleIncrement}>Increment</button>

        {this.state.count < 15 && <CompD />}
      </div>
    );
  }
}

export default CompC;
