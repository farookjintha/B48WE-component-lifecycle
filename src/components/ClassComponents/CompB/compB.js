import React from "react";

class CompB extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Count (as props) in CompB: {this.props.count}</h3>
      </div>
    );
  }
}

export default CompB;



