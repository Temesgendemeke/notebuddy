const save_authtoken = (token) => {
	localStorage.setItem("auth_token", token);
};

export const is_auth = () => {
	const token = localStorage.getItem("auth_token");
	if (!token) {
		return false;
	}
	return true;
};

export const read_token = () => {
	return localStorage.getItem("auth_token");
};

export const logout = () => {
	localStorage.removeItem("auth_token");
    setToken(null)
};

export default save_authtoken;
