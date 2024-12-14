import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, redirect } from "react-router";


const Signup = () => {
	
	const [form, setForm] = useState("signup")


	useEffect(()=>{
		document.querySelector('.close').addEventListener('keydown', handleKeyDown())
	})

	
	const handleKeyDown = (event) =>{
		console.log("fdfdfdfd")
		if (event.key == 'Escape'){
			return redirect("/")
		}
	}



	return (
		<>
			<Link to="/">
				<IoMdClose className="text-4xl p-5 close" />
			</Link>
			<div className="flex justify-center items-center mt-5">
				<form
					action="/"
					method="post"
					className="flex flex-col gap-4 capitalize"
				>
					<div className="flex">
						<h1 className="text-4xl text-center mt-5 self-center justify-self-center">
							Signup
						</h1>
					</div>

					<label htmlFor="email">email:</label>
					<input
						type="email"
						placeholder="enter your email addres"
						className=" input"
					></input>
					<label htmlFor="password">password:</label>
					<input
						type="password"
						placeholder="password"
						id=""
						className=" input"
					/>
					<label htmlFor="confirm password">confirm password:</label>
					<input
						type="password"
						placeholder="confirm password"
						id=""
						className=" input"
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
