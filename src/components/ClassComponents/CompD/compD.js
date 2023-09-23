import React from "react";

class CompD extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount = () => {
    console.log("Component will unmount (Child) is called...");
  };

  render() {
    console.log("Render (Child) is called...");
    return (
      <div>
        <h3>CompD</h3>
      </div>
    );
  }
}

export default CompD;
