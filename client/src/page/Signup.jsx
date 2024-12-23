import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, redirect, useNavigate} from "react-router";
import useAuth from "../context/useAuth";

const Signup = () => {
	const {
		save_authtoken,
		setUser,
		error,
		setError
	} = useAuth();

	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: "",
		password: "",
		confirm_password: "",
	});
	const [formError, setFormError] = useState({
		email:'',
		password:'',
		confirm_password:''
	})

	
	useEffect(()=>{
		setFormError({})
	}, [form])
	

	useEffect(() => {
		document
			.querySelector(".close")
			.addEventListener("keydown", (event) => handleKeyDown(event));
	});




	const validateForm = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!form.email){
			setFormError((prev)=>({...prev, email:"email is required"}))
		}

		if(!emailRegex.test(form.email)){
			setFormError((prev)=>({...prev, email:"Invalid email address"}))
		}

		if(!form.password){
			setFormError((prev)=>({...prev, password:"password is required"}))
		}

		if(!form.confirm_password){
			setFormError((prev)=>({...prev, confirm_password:"confirm password is required"}))
			return
		}

		if (form.password != form.confirm_password) {
			setError({ message: "password doest match", show: true });
			return;
		}

		return true	
	}

	const handleKeyDown = (event) => {
		if (event.key == "Escape") {
			return redirect("/");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()){
			return
		}
		
		const res = await fetch("http://127.0.0.1:8000/signup", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				email: form.email,
				password: form.password,
			}),
		});

		const data = await res.json();

		if (res.ok) {
			save_authtoken({'access':data.access, 'refresh':data.refresh})
			setUser(data.user);
			navigate('/home')
		}else{
			Object.entries(data).map(([, value]) =>{
				setError({message:value.join(''), show:true})
			})
		}
	};

	const handleChange = () => {
		setError((prev) => ({ ...prev, show: false }));
	};

	return (
		<>
			<Link to="/">
				<IoMdClose className="text-4xl p-5 close" />
			</Link>

			<div className="flex justify-center items-center mt-5">
				<form
					action="/"
					method="post"
					className="flex flex-col gap-2 capitalize"
					onSubmit={handleSubmit}
					onChange={handleChange}
				>
					<div className="flex flex-col gap-y-2">
						<h1 className="text-4xl text-center mt-5 self-center justify-self-center">
							Signup
						</h1>
						{error.show && (
							<p className="bg-red-300 text-center mt-2">
								{error.message}
							</p>
						)}
					</div>

					<label
						htmlFor="email"
						className="mt-4"
					>
						email:
					</label>
					<input
						type="email"
						placeholder="enter your email addres"
						className=" input"
						value={form.email}
						onChange={(e) =>
							setForm((prev) => ({
								...prev,
								email: e.target.value,
							}))
						}
					></input>
					<p className="error-msg">{formError.email}</p>
					<label htmlFor="password">password:</label>
					<input
						type="password"
						placeholder="password"
						id=""
						className=" input"
						value={form.password}
						onChange={(e) =>
							setForm((prev) => ({
								...prev,
								password: e.target.value,
							}))
						}
					/>
					<p className="error-msg">{formError.password}</p>
					<label htmlFor="confirm password">confirm password:</label>
					<input
						type="password"
						placeholder="confirm password"
						id=""
						className=" input"
						value={form.confirm_password}
						onChange={(e) =>
							setForm((prev) => ({
								...prev,
								confirm_password: e.target.value,
							}))
						}
					/>
					<p className="error-msg text-red-400">{formError.confirm_password}</p>
					<input
						type="submit"
						value="Signup"
						className="input bg-gray-950 text-white "
					/>
					<span className="text-center">
						if you have an account, <Link to="/login">Login</Link>
					</span>
				</form>
			</div>
		</>
	);
};

export default Signup;
