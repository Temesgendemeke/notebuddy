import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Note from "./page/Note.jsx";
import Home from "./page/Home.jsx";
import Signup from "./page/Signup.jsx";
import Login from "./page/Login.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path={"/note"} element={<Note />}></Route>
      <Route path={"/signup"} element={<Signup />}></Route>
      <Route path={"/login"} element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
);
