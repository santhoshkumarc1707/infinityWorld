import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/WelcomePage";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
