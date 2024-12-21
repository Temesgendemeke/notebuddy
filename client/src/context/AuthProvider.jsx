import { useState } from "react";
import AuthContext from "./AuthContext";
import { jwtDecode } from "jwt-decode";

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(() =>
		JSON.parse(localStorage.getItem("authtoken"))
	);
	const [userId, setUserId] = useState(() =>
		token ? jwtDecode(token.access).user_id : null
	);
	const [user, setUser] = useState({})
	const [error, setError] = useState({
		show: false,
		message: "",
	});


	const save_authtoken = (token)=>{
		localStorage.setItem("authtoken", JSON.stringify(token));
		setToken(token)
	}

	

	const logout = (e) => {
		e.preventDefault()
		localStorage.removeItem("authtoken");
		setToken(null);
		setUserId(null);
	};


	const handleFormChange = () =>{
		setError((prev) =>({...prev, show:false}))
	}

	return (
		<AuthContext.Provider
			value={{ token, userId, logout,  user, setUser, error, setError, handleFormChange, save_authtoken }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
