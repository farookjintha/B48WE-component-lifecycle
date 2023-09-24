import { useEffect, useState } from "react";

const FCompA = (props) => {
  // useState(initalValue) -> [value, functionToUpdateValue]
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const toggleShow = () => {
    setShowName(!showName);
  };

  return (
    <div>
      <h3>FCompA</h3>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>

      <br />

      {showName && <h3>Name: {name}</h3>}
      <input type="text" onChange={handleName} placeholder="Enter name" />

      <button onClick={toggleShow}>
        {" "}
        {showName ? "Hide Name" : "Show Name"}{" "}
      </button>
      {/* <FCompB count={count} /> */}
    </div>
  );
};

export default FCompA;

// React Hooks

// useState -> to handle state in FC
// useEffect -> to handle lifecycle in FC

// Mounting; -> when component is shown up for the first time
// Updating; -> when updation is happening the component
// Unmounting; -> when removing the component.

// useEffect();  ->to handle lifecycle

// useEffect(function, dependecyArray);

// // Type 1 -> no dependency Array
// useEffect(() => {
//   // logic
// });

// // Type 2 -> empty dependency array
// useEffect(() => {
//   // logic
// }, []);

// // Type 3 -> with state in dependency array
// useEffect(() => {
//   // logic
// }, [stateValue1, stateValue2]);

// // Type 3 -> with return statement
// useEffect(() => {
//   return () => {
//     // logic
//   };
// }, []);
