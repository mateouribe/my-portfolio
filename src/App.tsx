import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/home";
import Navbar from "./components/global/navbar";
import ScrollToAnchor from "./utils/ScrollToAnchor";
import Layout from "./utils/Layout";
import NotFound from "./screens/notFound";

function App() {
  const location = useLocation();
  return (
    <>
      <Layout>
        <ScrollToAnchor />
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
