import "./App.css";
import { Footer, Header } from "./components";
import { HomePage } from "./features";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
