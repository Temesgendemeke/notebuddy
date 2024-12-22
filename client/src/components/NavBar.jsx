import { Link, useNavigate} from "react-router";
import useAuth from "../context/useAuth";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

const NavBar = () => {
	const navigate = useNavigate();
	const {logout} = useAuth()
	const [isOpen, setIsOpen] = useState(false);

	const isAuth = () =>{
		

		const token = localStorage.getItem('authtoken')
		if(token){
			return true
		}		
	}


	return (
		<nav className="flex justify-between p-4 shadow-sm items-center relative">
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

			{(isOpen) && (
				<ul className="menu font-sans cursor-pointer  bg-slate-50 absolute right-0 p-2 z-10 top-16 w-full text-[16px]">
					<li>
						<Link to="/" className="block">Home</Link>
					</li>
					<li>
						<Link to="/about" className="block">About</Link>
					</li>
					<li>
						{isAuth() ? <Link to="/logout" className="block">Logout</Link>:<Link to="/login" className="block">Login</Link>}
					</li>
				</ul>
			)}
			
			<FiMenu size={25} onClick={() => setIsOpen((prev) => !prev)} className="sm:hidden"/>

		</nav>
	);
};

export default NavBar;
