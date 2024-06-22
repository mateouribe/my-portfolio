import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/home";
import Navbar from "./components/global/navbar";
import ScrollToAnchor from "./utils/ScrollToAnchor";
import Layout from "./utils/Layout";

function App() {
  const location = useLocation();
  return (
    <>
      <Layout>
        <ScrollToAnchor />
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
