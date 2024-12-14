import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

const Login = () => {
	return (
		<>
			<Link to="/" className="">
				<IoMdClose className="text-4xl p-2" />
			</Link>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl text-center mt-5">Login</h1>
				<form
					action="/"
					method="post"
					className="flex flex-col p-10"
				>
					<label htmlFor="">Email</label>
					<input
						type="email"
						name="email"
						id=""
						className="input"
                        placeholder="enter your email address"
					/>
					<label htmlFor="password">password:</label>
					<input
						type="password"
						name="password"
						id=""
						className="input"
                        placeholder="enter password"
					/>
					<input
						type="submit"
						value="login"
						className="input bg-gray-950 text-white "
					/>
                <span className="text-center"> if you don't have an account, <Link to="/signup">Signup</Link></span>
				</form>
			</div>
		</>
	);
};

export default Login;
