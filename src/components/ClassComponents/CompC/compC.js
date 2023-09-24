import React from "react";
import CompD from "../CompD/compD";

class CompC extends React.Component {
  constructor(props) {
    super(props);
    // declaring the state
    this.state = {
      count: 0,
    };
    console.log("Constructor is called...");
  }

  // lifecycle method - mounting
  componentDidMount = () => {
    console.log("Component Did Mount is called..");
  };

  // lifecycle method - updating
  componentDidUpdate = () => {
    console.log("Component Did Update is called...");
  };

  // Event Handler Function
  handleIncrement = () => {
    // to update the state -> this.setState();
    this.setState({
      count: this.state.count + 1,
    });
  };

  // lifecycle method
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

// Mounting -> first render => render, componentDidMount
// Updating -> further rendering... -> render, componentDidUpdate
// Unmounting -> removing  -> componentWillUnmount

// cupboard; (Comp C)

// mounting -> placing in my room
// updating -> adding or removing things inside the cupboard
// unmounting -> removing the cupboard itself.

// book (Child):  (Comp D)
// mounting -> adding a book
// updating -> writing something or removing something inside a book.
// unmounting -> removing the book itself.

// Mounting -> showing the component for the first time

// CompC constructor called
// CompC render
// CompD render

// CompC Mounted...

// Updating -> increasing or decreasing the count (state variable)

// updating first time
// CompC render
// CompD render

// CompC Updated...

// updating second time
// CompC render
// CompD render

// CompC Updated...

//Unmounting -> removing component based on condition

// CompC - render
// CompD  - willUnMount called..

// CompC - Did updated...
