import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<About />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>

  );
};

export default App;
