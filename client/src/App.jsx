import "./App.css";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Note from "./page/Note.jsx";
import Signup from "./page/Signup.jsx";
import Login from "./page/Login.jsx";
import About from "./page/About.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import LandingPage from "./page/LandingPage.jsx";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<LandingPage />}
				></Route>
				<Route element={<PrivateRoute />}>
					<Route
						path="/home"
						element={<Home />}
					></Route>
					<Route
						path={"/note"}
						element={<Note />}
					></Route>
				</Route>

				<Route
					path={"/signup"}
					element={<Signup />}
				></Route>
				<Route
					path={"/login"}
					element={<Login />}
				></Route>
				<Route
					path={"/about"}
					element={<About />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
