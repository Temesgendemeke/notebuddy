import React, { useContext, createContext } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App";
import AuthProvider from "./context/AuthProvider";



createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<App />
	</AuthProvider>
);
