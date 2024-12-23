import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate} from "react-router";
import useAuth from "../context/useAuth";



const Login = () => {
	const {save_authtoken,  error, handleFormChange, setError} = useAuth();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	



	
	const login_btn = async (e) => {
		e.preventDefault();

		const res = await fetch("http://127.0.0.1:8000/token", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				email: e.target.email.value,
				password: e.target.password.value,
			}),
		});

		const data = await res.json();

		if (res.ok) {
			save_authtoken({'access':data.access, 'refresh':data.refresh})
			navigate('/home')
		}else{
			Object.entries(data).map(([, value]) =>{
				setError({message:value, show:true})
			})
		}
	};


	return (
		<>
			<Link
				to="/"
				className=""
			>
				<IoMdClose className="text-4xl p-2" />
			</Link>
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
