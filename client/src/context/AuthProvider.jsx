import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { jwtDecode } from "jwt-decode";

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
    email: '',
    password: '',
    confirm_password: ''
  });

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

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authtoken");
    setToken(null);
    setUserId(null);
    setUser({});
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, show: false }));
  };

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
