import "./App.css";
import ChatPresenter from "./presenters/ChatPresenter";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<p>Hello and welcome do Dogge!</p>}></Route>
        <Route path="/chat" element={<ChatPresenter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
