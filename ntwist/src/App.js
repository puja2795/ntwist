import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/Home";
import AppHeader from "./Components/Header";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <HomePage />
    </div>
  );
}

export default App;
