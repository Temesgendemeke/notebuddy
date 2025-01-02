import { useState } from "react";
import { Link, useNavigate} from "react-router";
import useAuth from "../context/useAuth";
import NavBar from "../components/NavBar";
import axios from "axios";
import { baseURL } from "../utils/constants";



const Login = () => {
	const {save_authtoken,  error, handleFormChange, setError} = useAuth();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	



	
	const login_btn = async (e) => {
		e.preventDefault();

		const res = await axios.post(`${baseURL}/token`, {
			email: e.target.email.value,
				password: e.target.password.value,
		})

	
		if (res.status >= 200 && res.status < 300) {
			save_authtoken({'access':res.data.access, 'refresh':res.data.refresh})
			navigate('/home')
		}else{
			Object.entries(res.data).map(([, value]) =>{
				setError({message:value, show:true})
			})
		}
	};


	return (
		<>
			<NavBar/>
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
						onChange={(e) => setForm((prev) => ({...prev, email:e.target.value}))}
					/>
					<label htmlFor="password">password:</label>
					<input
						type="password"
						name="password"
						id=""
						className="input"
						placeholder="enter password"
						value={form.password}
						onChange={(e) => setForm((prev) => ({...prev, password:e.target.value}))}
					/>
					<input
						type="submit"
						value="login"
						className="input bg-gray-950 text-white "
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
