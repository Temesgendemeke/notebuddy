import { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, redirect, useNavigate } from "react-router";
import useAuth from "../context/useAuth";

const Signup = () => {
	const {
		setUserId,
		save_userId,
		user,
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
	

	useEffect(() => {
		document
			.querySelector(".close")
			.addEventListener("keydown", (event) => handleKeyDown(event));
	});

	const handleKeyDown = (event) => {
		if (event.key == "Escape") {
			return redirect("/");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (form.password != form.confirm_password) {
			setError({ message: "password doest match", show: true });
			return;
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
			save_authtoken(data.token);
			setUser(data.user);
			navigate('/')
		}else{
			Object.entries(data).map(([key, value]) =>{
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
