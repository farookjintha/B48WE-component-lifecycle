import { useEffect, useState } from "react";

const FCompC = () => {
  const [childToggle, setChildToggle] = useState(false);
  const [timer, setTimer] = useState(0);
  // Type 4 -> with return statement (only on unmounting)
  useEffect(() => {
    console.log("Child Mounting Happens");

    return () => {
      console.log(
        "useEffect Type 4 is called in Child: with return statement. (Only on Unmounting)"
      );
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      //timer function
      setTimer(timer + 1); //updating state variable
      console.log("Updating Timer: ", timer);
    }, 1000);
  }, [timer]);

  // useEffect(() => {
  //   console.log("Child Component just mounted..");
  // }, []);

  return (
    <div>
      <h3>FCompC</h3>
      <h3>Stopwatch</h3>
      <h1>Timer: {timer}s</h1>
    </div>
  );
};

export default FCompC;
