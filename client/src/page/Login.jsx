import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../context/useAuth";
import NavBar from "../components/NavBar";
import axios from "axios";
import { baseURL } from "../utils/constants";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
	const { save_authtoken, error, handleFormChange, setError, CAPTCHA_KEY } =
		useAuth();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const [capVal, setCapVal] = useState(false);
	const [formError, setFormError] = useState({
		email: "",
		password: "",
	});

	const login_btn = async (e) => {
		e.preventDefault();

		if (e.target.email.value == "" || e.target.email.value == "") {
			if (e.target.email.value == "") {
				setFormError((prev) => ({
					...prev,
					email: "Your email address is required.",
				}));
			}

			if (e.target.password.value == "") {
				setFormError((prev) => ({
					...prev,
					email: "Your password is required.",
				}));
			}
			return;
		}

		const res = await axios.post(`${baseURL}/token`, {
			email: e.target.email.value,
			password: e.target.password.value,
		});

		if (res.status >= 200 && res.status < 300) {
			save_authtoken({
				access: res.data.access,
				refresh: res.data.refresh,
			});
			navigate("/home");
		} else {
			Object.entries(res.data).map(([, value]) => {
				setError({ message: value, show: true });
			});
		}
	};

	const onChange = () => {
		console.log("capured");
		setCapVal(true);
	};

	return (
		<>
			<NavBar />
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl text-center mt-5">Login</h1>
				{error.show && (
					<p className="bg-red-300 input border-none rounded-none transition-opacity  ease-in-out delay-200 duration-1000">
						{error.message}
					</p>
				)}
				<form
					action="/home"
					method="post"
					className="flex flex-col p-5"
					onSubmit={login_btn}
					onChange={handleFormChange}
				>
					<label htmlFor="">Email</label>
					<input
						type="email"
						name="email"
						id=""
						className="input "
						placeholder="enter your email address"
						value={form.email}
						onChange={(e) =>
							setForm((prev) => ({
								...prev,
								email: e.target.value,
							}))
						}
					/>
					<p className="error-msg">{formError.email}</p>
					<label htmlFor="password">password:</label>
					<input
						type="password"
						name="password"
						id=""
						className="input "
						placeholder="enter password"
						value={form.password}
						onChange={(e) =>
							setForm((prev) => ({
								...prev,
								password: e.target.value,
							}))
						}
					/>
					<p className="error-msg">{formError.password}</p>
					<ReCAPTCHA
						sitekey={CAPTCHA_KEY}
						onChange={onChange}
					/>
					<input
						type="submit"
						value="login"
						disabled={!capVal}
						className="input bg-gray-950 text-white disabled:opacity-50"
					/>

					<span className="text-center">
						{" "}
						if you don&apos;t have an account,{" "}
						<Link to="/signup">Signup</Link>
					</span>
				</form>
			</div>
		</>
	);
};

export default Login;
