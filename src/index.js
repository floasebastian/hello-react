import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import "./styles.css";
import { Layout } from "./layouts/layout";
import App from "./app";
import { Home } from "./pages/home";
import { About } from "./pages/about";

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
    <Outlet />
  </BrowserRouter>
);

console.log("Hello from src/index.js");