import { useState } from "react";
import { Link } from "react-router";

const NavBar = () => {
	const [isAuth, setIsAuth] = useState(false);
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
					<Link to="/note">Notes</Link>
				</li>
				<li className="hover:opacity-70">
					<Link to="/about">About</Link>
				</li>
				<li className="hover:opacity-70">
					{isAuth ? (
						<Link to="/logout">Logout</Link>
					) : (
						<Link to="/login">Login</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
