import "./App.css";
import CompA from "./components/ClassComponents/CompA/compA";
import CompB from "./components/ClassComponents/CompB/compB";
import CompC from "./components/ClassComponents/CompC/compC";
import FCompA from "./components/FunctionalComponents/FCompA/fcompA";
import FCompB from "./components/FunctionalComponents/FCompB/fcompB";
import FCompC from "./components/FunctionalComponents/FCompC/fcompC";

function App() {
  return (
    <div className="App">
      <h2>Class Components</h2>
      {/* <CompA /> */}
      {/* <CompB /> */}
      <CompC />

      {/* <h2>Functional Components</h2>
      <FCompA />
      <FCompB />
      <FCompC /> */}
    </div>
  );
}

export default App;
