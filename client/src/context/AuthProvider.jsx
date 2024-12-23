import { useState, useEffect, useRef } from "react";
import AuthContext from "./AuthContext";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";



const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(() =>
		JSON.parse(localStorage.getItem("authtoken"))
	);
	const [userId, setUserId] = useState(null);
	const [user, setUser] = useState({});
	const [error, setError] = useState({
		show: false,
		message: "",
	});
	const [form, setForm] = useState({
		email: "",
		password: "",
		confirm_password: "",
	});
	const [formError, setFormError] = useState({
		email: "",
		password: "",
		confirm_password: "",
	});
  const [loading, setLoading] = useState(true)
  const menuRef = useRef(null);

 

	// Decode userId after the token has been set
	useEffect(() => {
		if (token) {
			const decodedToken = jwtDecode(token.access);
			setUserId(decodedToken.user_id);
		}
	}, [token]); // Runs only when token changes

	const isAuth = () => {
		return token ? true : false;
	};

	const save_authtoken = (token) => {
		localStorage.setItem("authtoken", JSON.stringify(token));
		setToken(token);
	};

	const logout = () => {
		localStorage.removeItem("authtoken");
		setToken(null);
		setUserId(null);
		setUser({});
    window.location.reload();
	};

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
		setError((prev) => ({ ...prev, show: false }));
	};

	const updateToken = async () => {
		const res = await fetch("http://127.0.0.1:8000/token/refresh", {
			method: "POST",
			Headers: {
				content: "application/json",
			},
			body: JSON.stringify({ refresh: token.refresh }),
		});

    let data = res.json();

    if(res.ok){
      save_authtoken({'access':data.access, 'refresh':data.refresh})
      setUserId(jwtDecode(data).id)
    }else{
      logout()
    }
    if(loading){
      setLoading(false)
    }
	};

  useEffect(()=> {

    // if(loading){
    //     updateToken()
    // }
    let fourMinutes = 1000 * 60 * 4

    let interval =  setInterval(()=> {
        if(token){
            updateToken()
        }else{
          setToken(null)
          setUserId(null)
          logout()
        }
    }, fourMinutes)
    return ()=> clearInterval(interval)

}, [token, loading])

	return (
		<AuthContext.Provider
			value={{
				token,
				userId,
				logout,
				user,
				setUser,
				error,
				setError,
				handleFormChange,
				save_authtoken,
				form,
				setForm,
				setFormError,
				formError,
				isAuth,
        updateToken,
        menuRef
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};



AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
