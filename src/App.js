import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  return (
    <div className="App-container">
      <Header />
      <Counter />
      <ToggleBtn />
    </div>
  );
}

export default App;
