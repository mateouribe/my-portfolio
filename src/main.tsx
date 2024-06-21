import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import StatesProvider from "./context/StatesProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StatesProvider>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </StatesProvider>
);
