import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Top from "./components/Top";

function App() {
  return (
    <>
      <div>
        <Top />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
