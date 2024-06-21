import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/home";
import Navbar from "./components/global/navbar";
import ScrollToAnchor from "./utils/scrollToAnchor";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToAnchor />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
