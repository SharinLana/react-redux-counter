import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  const counterIsShown = useSelector((store) => store.showCounter);

  return (
    <div className="App-container">
      <Header />
      {counterIsShown && <Counter />}
      <ToggleBtn />
    </div>
  );
}

export default App;
