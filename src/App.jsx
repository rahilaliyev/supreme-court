import Header from "@/components/header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}

export default App;
