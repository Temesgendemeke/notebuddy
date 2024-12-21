import { Link, useNavigate } from "react-router";
import useAuth from "../context/useAuth";

const NavBar = () => {
	const navigate = useNavigate();
	const {logout} = useAuth()

	const isAuth = () =>{
		

		const token = localStorage.getItem('authtoken')
		if(token){
			return true
		}		
	}

	




	return (
		<nav className="flex justify-between p-4 shadow-sm">
			<Link to="/">
				<p className="text-2xl">NoteBuddy</p>
			</Link>
			<ul className="capitalize gap-x-4  cursor-pointer hidden sm:flex">
				<li className="hover:opacity-70">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:opacity-70">
					<Link to="/about">About</Link>
				</li>
				<li className="hover:opacity-70">
					{isAuth() ? (
						// <button to="/dashboard">Dashboard</button>
						<button onClick={(e) => logout(e)}>Logout</button>
					) : (
						<Link to="/login">Login</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
