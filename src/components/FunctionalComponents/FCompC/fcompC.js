import { useEffect } from "react";

const FCompC = () => {
  // Type 4 -> with return statement (only on unmounting)
  useEffect(() => {
    return () => {
      console.log(
        "useEffect Type 4 is called in Child: with return statement. (Only on Unmounting)"
      );
    };
  }, []);

  useEffect(() => {
    console.log("Child Component just mounted..");
  }, []);

  return (
    <div>
      <h3>FCompC</h3>
    </div>
  );
};

export default FCompC;
