import "./App.css";
import ChatPresenter from "./presenters/ChatPresenter";
import { Route, Routes } from "react-router-dom";
import LandingPresenter from "./presenters/LandingPresenter";
import EndPresenter from "./presenters/EndPresenter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPresenter />}></Route>
        <Route path="/chat" element={<ChatPresenter />}></Route>
        <Route path="/end/:state" element={<EndPresenter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
