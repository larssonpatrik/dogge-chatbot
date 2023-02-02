import "./App.css";
import ChatPresenter from "./presenters/ChatPresenter";
import { Route, Routes } from "react-router-dom";
import LandingPresenter from "./presenters/LandingPresenter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPresenter />}></Route>
        <Route path="/chat" element={<ChatPresenter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
