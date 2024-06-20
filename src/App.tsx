import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/home";
import Navbar from "./components/global/navbar";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
