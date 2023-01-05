import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  const showCounter = useSelector((state) => state.showCounter);

  return (
    <div className="App-container">
      <Header />
      {showCounter && <Counter />}
      <ToggleBtn />
    </div>
  );
}

export default App;
