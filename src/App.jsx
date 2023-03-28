import Header from "@/components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./components/chat";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/chat" exact element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
