import { useEffect, useState } from "react";
import FCompC from "../FCompC/fcompC";

const FCompB = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);

  // Type 1 -> called in Mounting and Updating
  useEffect(() => {
    console.log("useEffect Type 1 is called: without dependency array");
  }); // it will be called everytime when any changes are occuring

  // Type 2 -> called in only Mounting
  useEffect(() => {
    console.log("useEffect Type 2 is called: with empty dependency array");
  }, []); // will be called only while mounting (first time)

  // Type 3 -> called in Mounting and Updating of the specified state changes.
  useEffect(() => {
    console.log("useEffect Type 3 is called: with state in  dependency array");
  }, [name, toggle]); // will be called when the state in the dependency array

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h3>FCompB</h3>
      <h3>
        Count: {count} |----| Name: {name}{" "}
      </h3>
      <button onClick={handleIncrement}>Increment</button>
      <input type="text" placeholder="Enter name" onChange={handleName} />
      <h3>Toggle is {toggle ? "ON" : "OFF"}</h3>
      <button onClick={handleToggle}>Switch Toggle</button>

      {toggle && <FCompC />}

      {/* {count < 15 && <FCompC />} */}
    </div>
  );
};

export default FCompB;
